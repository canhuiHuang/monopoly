import React, { Component } from 'react';
import rollover_sound from '../sounds/rollover.mp3'
import pepe5head from '../images/pepe5head.png';

class PiecePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            myUUID: this.props.myUUID
        }
    }

    componentDidUpdate(){

        if(this.props.lobbyChannel != null){
            this.props.pubnub.getMessage(this.props.lobbyChannel, (msg) => {

                // Listen for users
                if (msg.message.users) {
                    console.log(
                        'received:'
                    );
                    this.setState({
                        users: msg.message.users
                    })
                }
                // Listen for picks
                if (this.props.isRoomCreator) {
                    console.log('listened something');
                    if (msg.message.myPick) {
                        const curUsers = this.state.users;

                        let idAlreadyPicked = false;

                        if(curUsers[msg.publisher].hasOwnProperty('piece_id')) {
                            if (curUsers[msg.publisher].piece_id === msg.message.myPick){
                                idAlreadyPicked = true;
                            }
                        }
                        
                        for (let uuid in curUsers){
                            if(curUsers.hasOwnProperty(uuid)){
                                if(uuid.hasOwnProperty('piece_id')){
                                    if (uuid.piece_id === msg.message.myPick) {
                                        idAlreadyPicked = true;
                                        break;
                                    }
                                }
                            }
                        }
                        if (!idAlreadyPicked) {
                            curUsers[msg.publisher].piece_id = msg.message.myPick;
                            this.setState({
                                users: curUsers
                            });

                            this.props.pubnub.publish({
                                message: {users: this.state.users},
                                channel: this.props.lobbyChannel
                            })
                        }
                    }
                };

            });
        };
    }

    onHover = () => {
        const sound = new Audio(rollover_sound);
        console.log('aka');
        sound.play();
    }
    onClick = (index) => {
        this.props.pubnub.publish({
            message: {myPick: index},
            channel: this.props.lobbyChannel});
        
        console.log('msg package sent:', {myPick: index});

        console.log(index);
    }

    renderPieces = ()=> {
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
         
        for (let uuid of Object.keys(this.state.users)) {
            console.log('pre-entrado', this.state.users[uuid]);
            if (this.state.users[uuid].piece_id){
                pieces[this.state.users[uuid].piece_id].player = 'other';
            }
        }
        if (this.state.users[this.state.myUUID].hasOwnProperty('piece_id')){
            if (pieces[this.state.users[this.state.myUUID].piece_id] !== undefined) {
                pieces[this.state.users[this.state.myUUID].piece_id].player = 'self';
            } 
        }
        console.log(this.state.users);

        const showPieces = [];
        pieces.forEach((piece,index) => {
            showPieces.push(<button key={index}  className={`s-piece-container ${piece.player}`} onMouseEnter={()=>this.onHover()} onClick={()=> this.onClick(index)} disabled={piece.player === ''? false : true}>
            <div className="shadow">
            </div>
            <div className="s-piece"><img src={piece.url} alt="error"/></div>
            
        </button>)
        });
        return showPieces;
    }

    render() {
        return (
            <div className="piece-picker">
                {this.renderPieces()}
            </div>
        )
    }
    
}

export default PiecePicker;
