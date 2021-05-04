import React from 'react';

// Pass property object as props.
function PropertyCard({property}) {
    return (
        <div className="propertyCard">
            <div className="propertyCard-container">
                <div className={`name ${property.data.color_set}`} >{property.data.property_name}</div>
                <img src={property.image} alt=""/>
                <div className="rent" >RENT:  ${property.data.rent[0]}</div>
                <div className="house" ><div>With 1 House</div><div>${property.data.rent[1]}</div></div>
                <div className="house" ><div>With 2 Houses</div><div>${property.data.rent[2]}</div></div>
                <div className="house" ><div>With 3 Houses</div><div>${property.data.rent[3]}</div></div>
                <div className="house" ><div>With 4 Houses</div><div>${property.data.rent[4]}</div></div>
                <div className="house" ><div>With HOTEL</div><div>${property.data.rent[5]}</div></div>
                <div className="mortgage" >Mortgage Value: ${property.data.mortgage_value}</div>
                <div className="houses-cost" >Houses cost: ${property.data.house_cost} each</div>
                <div className="hotel-cost" >Hotel cost: ${property.data.house_cost} plus 4 houses</div>
                <div className="info-footer" >If a player owns ALL the lots of any Color Group, the rent is doubled on unimproved lots while the rent on improved lots is affected by a multiplier.</div>
            </div>
        </div>
    )
}

export default PropertyCard;
