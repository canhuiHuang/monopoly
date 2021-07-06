import React, {useState} from 'react';
import PropertyCard from './PropertyCard';

function Deck({properties}) {
    
    const [show, setShow] = useState(false);

    const renderCards = () => {
        const cardList = [];
        let i = 0;
        for (let property in properties) {
            cardList.push(<PropertyCard key={i} property={properties[property]} />)
            i++;
        }
        return cardList;
    }

    return (
        <div className={`card-list ${show? 'show' : ''}`} onClick={()=> {setShow(!show)}}>
            {renderCards()}
        </div>
    )
}

export default Deck;
