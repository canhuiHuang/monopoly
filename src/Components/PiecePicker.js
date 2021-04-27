import React from 'react';
import rollover_sound from '../sounds/rollover.mp3'
import pepe5head from '../images/pepe5head.png';



function PiecePicker({onPublish, users,myUUID}) {

    
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
        const pieces = [
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''},
            {url: pepe5head, player: ''}
        ];
         
        for (let uuid in users) {
            if (users.hasOwnProperty(uuid)) {
                console.log('entrado');
                if (uuid.hasOwnProperty('piece_id')){
                    console.log('entrado');
                    pieces[uuid.piece_id].player = 'other';
                }
            }
        }
        if (users[myUUID].hasOwnProperty('piece_id')){
            pieces[users[myUUID].piece_id].player = 'self';
        }
        console.log(users);

        const showPieces = [];
        pieces.forEach((piece,index) => {
            showPieces.push(<button key={index}  className={`s-piece-container ${piece.player}`} onMouseEnter={onHover} onClick={() => {onClick(index)}} disabled={piece.player === ''? false : true}>
            <div className="shadow">
            </div>
            <div className="s-piece"><img src={piece.url} alt="error"/></div>
            
        </button>)
        });
        return showPieces;
    }

    return (
        <div className="piece-picker">
            {renderPieces()}
        </div>
    )
}

export default PiecePicker;
