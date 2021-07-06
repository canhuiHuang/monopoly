import React, { Component } from 'react';
import Swal from "sweetalert2";
import PropertyCard from './PropertyCard';

export class SellPropertiesWindow extends Component {
    constructor(props){
        super(props);

        this.state = {
            propertiesState: {}
        }
    }

    componentDidMount(){
        // IDK
        if(this.props.gameChannel != null){
            this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {
                // Active sell property button after buyer denies request.
                if(msg.message.sellerUUID === this.props.myUUID && msg.message.deny){
                    
                    Swal.fire(`Sell Offer of ${this.props.users[this.props.myUUID].properties[msg.message.property].property_name} Denied`, '', 'info');
                }
            });
        };
    }

    renderProperties = (selectedUser) => {
        // Sell to Bank
        const sellHouses = (propertyName) => {
            // Users package
            const usersToUpdate = {};
            const earning = Math.round(this.props.allProperties[propertyName].houses * this.props.allProperties[propertyName].data.house_cost / 2);
            usersToUpdate[this.props.myUUID] = {newBalance: this.props.users[this.props.myUUID].balance + earning}

            this.props.onOffer();
            this.props.selectUser(null);

            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate, 
                    updateProperty: {name: propertyName, newHousesNumber: 0},
                    transactionDone: true,
                    transaction: {
                        soldTobank: true,
                        soldHousesOnly: true,
                        seller: this.props.myUUID,
                        property_name: this.props.allProperties[propertyName].data.property_name, 
                        houses_sold: this.props.allProperties[propertyName].houses
                    },
                    broadcast_message: `${this.props.users[this.props.myUUID].name} sold the houses of ${this.props.allProperties[propertyName].data.property_name} to the bank for $${earning}.`
                },
                channel: this.props.gameChannel
            });
        }
        // Sell to Bank or User
        const sellProperty = (propertyName, price = 0) => {
            this.props.onOffer();

            if (selectedUser === 'bank') {
                // Users package
                const usersToUpdate = {};
                const earning = Math.round(this.props.allProperties[propertyName].houses * this.props.allProperties[propertyName].data.house_cost / 2) + this.props.allProperties[propertyName].data.mortgage_value;
                usersToUpdate[this.props.myUUID] = {newBalance: this.props.users[this.props.myUUID].balance + earning, removePropertyName: propertyName};

                this.props.pubnub.publish({
                    message: {
                        users: usersToUpdate, 
                        updateProperty: {name: propertyName, newHousesNumber: 0, newOwner: ''},
                        transactionDone: true,
                        transaction: {
                            soldTobank: true,
                            seller: this.props.myUUID,
                            property_name: this.props.allProperties[propertyName].data.property_name, 
                            houses_sold: this.props.allProperties[propertyName].houses
                        },
                        broadcast_message: `${this.props.users[this.props.myUUID].name} sold ${this.props.allProperties[propertyName].data.property_name} to the bank for $${earning}.`
                    },
                    channel: this.props.gameChannel
                });
            } else {
                this.props.pubnub.publish({
                    message: {
                        request: selectedUser,
                        transaction: {
                            offerType: 'property',
                            seller: this.props.myUUID,
                            property_name: this.props.allProperties[propertyName].data.property_name,
                            propertyName: propertyName,
                            price: parseInt(price)
                        },
                    },
                    channel: this.props.gameChannel
                });
            }
            this.props.selectUser(null);
        }

        // Display properties & cards
        const my = this.props.users[this.props.myUUID];
        const propertyCards = [];
        if (selectedUser === 'bank') {
            let i = 0;
            for (let property in my.properties) {
                propertyCards.push(
                    <div key={i} className="propertyCard-with-btns">
                        <PropertyCard property={my.properties[property]}/>
                        {this.props.allProperties[property].houses > 0 && <button className="sellHouses-btn" onClick={() => sellHouses(property)}>Sell Houses</button>}
                        <button className="sellProperty-btn" onClick={() => sellProperty(property)}>Sell Property</button>
                    </div>
                );
                i++;
            } 
        } else {
            let i = 0;
            for (let property in my.properties) {

                const setPrice = (property) => {
                    Swal.fire({
                        position: 'center',
                        input: 'text',
                        allowOutsideClick: false,
                        inputPlaceholder: 'Set your price',
                        showCancelButton: true,
                        confirmButtonColor: 'rgb(208,33,41)',
                        confirmButtonText: 'OK',
                        width: 275,
                        padding: '0.7em',
                        customClass: {
                          heightAuto: false,
                          popup: 'popup-class',
                          confirmButton: 'join-button-class ',
                          cancelButton: 'join-button-class'
                        } 
                      }).then((result) => {
                        // Check if the user typed a value in the input field
                        if(result.value <= this.props.users[this.props.selectedUser].balance && result.value > 0){
                            sellProperty(property, result.value);
                        } else if (result.isDismissed){
                            // nothing bruh
                        } else {
                            Swal.fire({
                                position: 'center',
                                allowOutsideClick: false,
                                icon: 'info',
                                text: `${this.props.users[this.props.selectedUser].name} doesn't have this much money. Ask for less.`,
                                width: 275,
                                padding: '0.7em',
                                customClass: {
                                    heightAuto: false,
                                    title: 'title-class',
                                    popup: 'popup-class',
                                    confirmButton: 'button-class'
                                }
                              })
                        }
                      })
                }
                propertyCards.push(
                    <div key={i} className="propertyCard-with-btns">
                        <PropertyCard property={my.properties[property]}/>
                        {this.props.allProperties[property].houses === 0 && <button className="sellProperty-btn" onClick={() => setPrice(property)}>Sell Property</button>}
                    </div>
                );
                i++;
            }
        }
        return propertyCards;
    }

    render() {
        return (
            <div className="sellProperty-container">
                <div className="sellProperty-window">
                    <div className="title-sellProperty">What are you selling?</div>
                        <div className="propertyCards">
                            {this.renderProperties(this.props.selectedUser)}
                        </div>
                    <button className="btn btn-back" onClick={() => {this.props.selectUser(null)}}>Back</button>
                </div>
                <div className="layer"></div>
            </div>
        )
    }
}

export default SellPropertiesWindow
