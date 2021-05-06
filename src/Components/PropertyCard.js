import React from 'react';

// Pass property object as props.
function PropertyCard({property}) {

    if (property.data.type === 'normal'){
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
                    <div className="mortgage" >Bank Sell Price: ${property.data.mortgage_value}</div>
                    <div className="houses-cost" >Houses cost: ${property.data.house_cost} each</div>
                    <div className="hotel-cost" >Hotel cost: ${property.data.house_cost} plus 4 houses</div>
                    <div className="info-footer" >If a player owns ALL the lots of any Color Group, the rent is doubled on unimproved lots while the rent on improved lots is affected by a multiplier.</div>
                </div>
            </div>
        )
    } else if (property.data.type === 'transport') {
        return (
            <div className="propertyCard">
                <div className="propertyCard-container">
                    <img className="transport" src={property.image} alt=""/>
                    <div className="line line-top"></div>
                    <div className='special-name'>{property.data.property_name}</div>
                    <div className="line line-bottom"></div>

                    <div className="house" ><div>Rent</div><div>${property.data.rent[0]}</div></div>
                    <div className="house" ><div>If 2 portals</div><div>${property.data.rent[1]}</div></div>
                    <div className="house" ><div>If 3   ...</div><div>${property.data.rent[2]}</div></div>
                    <div className="house" ><div>If 4   ...</div><div>${property.data.rent[3]}</div></div>
                    <div className="house mortgage-transport" ><div>Bank Sell Price</div><div>${property.data.mortgage_value}</div></div>
                </div>
            </div>
        )
    } else if (property.data.type === 'utility') {
        return(
            <div className="propertyCard">
                <div className="propertyCard-container">
                    <img className="utility" src={property.image} alt=""/>
                    <div className="line line-top"></div>
                    <div className='special-name'>{property.data.property_name}</div>
                    <div className="line line-bottom"></div>

                    <div className="desc">If one "Utility" is owned, rent is {property.data.multiplier_value[0]} times amount shown on dice.</div>
                    <div className="desc">If both "Utilities" are owned, rent is {property.data.multiplier_value[1]} times amount shown on dice.</div>
                    <div className="house mortgage-utility" ><div>Bank Sell Price</div><div>${property.data.mortgage_value}</div></div>
                </div>
            </div>
        );
    } else return <div className="error">something is wrong :p</div>
}

export default PropertyCard;
