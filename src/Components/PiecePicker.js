import React from 'react';
import rollover_sound from '../sounds/rollover.mp3'
import pepe5head from '../images/pepe5head.png';

const piecesURL = [
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head,
    pepe5head
];

function PiecePicker({onPublish}) {
    const onHover = () => {
        const sound = new Audio(rollover_sound);
        console.log('aka');
        sound.play();
    }
    const onClick = (index) => {
        onPublish({myPick: index});
        console.log(index);
    }

    const renderPieces = ()=> {
        const pieces = [];
        piecesURL.forEach((url,index) => {
            pieces.push(<button key={index}            className="s-piece-container" onMouseEnter={onHover} onClick={() => {onClick(index)}}>
            <div className="shadow">
            </div>
            <div className="s-piece"><img src={url} alt="error"/></div>
            
        </button>)
        });
        return pieces;
    }

    return (
        <div className="piece-picker">
            {renderPieces()}
        </div>
    )
}

export default PiecePicker;
