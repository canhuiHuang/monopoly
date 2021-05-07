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
        const sellHouses = (property) => {
            this.props.onOffer();
            this.props.selectUser(null);
            this.props.pubnub.publish({
                message: {sellHouses: true, property: property},
                channel: this.props.gameChannel
            });
        }
        // Sell to Bank or User
        const sellProperty = (property, price = 0) => {
            const selectedUser = this.props.selectedUser;
            console.log('selected user: ',selectedUser );

            this.props.onOffer();
            this.props.selectUser(null);
            this.props.pubnub.publish({
                message: {sellProperty: true, property: property, user: selectedUser, price: price},
                channel: this.props.gameChannel
            });
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
