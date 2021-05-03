import React, { Component } from 'react';

export class SellPropertiesWindow extends Component {
    renderProperties = (selectedUser) => {
        // Bank
        const sellHouses = (property) => {
            this.props.selectUser(null);
            this.props.pubnub.publish({
                message: {sellHouses: true, property: property},
                channel: this.props.gameChannel
            });
        }
        const sellProperty = (property) => {
            const selectedUser = this.props.selectedUser;
            console.log('selected user: ',selectedUser );
            this.props.selectUser(null);
            this.props.pubnub.publish({
                message: {sellProperty: true, property: property, user: selectedUser},
                channel: this.props.gameChannel
            });
        }

        // Display properties & cards
        const my = this.props.users[this.props.myUUID];
        console.log('my: ', my);
        const propertyCards = [];
        if (selectedUser === 'bank') {
            
            let i = 0;
            for (let property in my.properties) {
                console.log('property: ', my.properties[property]);
                propertyCards.push(
                    <div key={i} className="propertyCard-with-btns">
                        <div className="propertyCard">
                            <div className="propertyCard-container">
                            <div className={`name ${my.properties[property].data.color_set}`} >{my.properties[property].data.property_name}</div>
                            <img src={my.properties[property].image} alt=""/>
                            <div className="rent" >RENT:  ${my.properties[property].data.rent[0]}</div>
                            <div className="house" ><div>With 1 House</div><div>${my.properties[property].data.rent[1]}</div></div>
                            <div className="house" ><div>With 2 Houses</div><div>${my.properties[property].data.rent[2]}</div></div>
                            <div className="house" ><div>With 3 Houses</div><div>${my.properties[property].data.rent[3]}</div></div>
                            <div className="house" ><div>With 4 Houses</div><div>${my.properties[property].data.rent[4]}</div></div>
                            <div className="house" ><div>With HOTEL</div><div>${my.properties[property].data.rent[5]}</div></div>
                            <div className="mortgage" >Mortgage Value: ${my.properties[property].data.mortgage_value}</div>
                            <div className="houses-cost" >Houses cost: ${my.properties[property].data.house_cost} each</div>
                            <div className="hotel-cost" >Hotel cost: ${my.properties[property].data.house_cost} plus 4 houses</div>
                            <div className="info-footer" >If a player owns ALL the lots of any Color Group, the rent is doubled on unimproved lots while the rent on improved lots is affected by a multiplier.</div>
                            </div>
                        </div>
                        {my.properties[property].houses > 0 && <button className="sellHouses-btn" onClick={() => sellHouses(property)}>Sell Houses</button>}
                        <button className="sellProperty-btn" onClick={() => sellProperty(property)}>Sell Property</button>
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
