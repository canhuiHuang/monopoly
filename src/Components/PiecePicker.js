import React, { Component } from 'react';
import rollover_sound from '../sounds/rollover.mp3'
import shortid from 'shortid';
import Game from './Game';


import pepe5head from '../images/pepe5head.png';
import snorlax from '../images/snorlax.png';
const pieces = [
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax,
    pepe5head,
    snorlax
];

class PiecePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            myUUID: this.props.myUUID,
            started: false
        }
        this.gameChannel = null;
    }

    pubnubHandler = () => {
        if(this.props.lobbyChannel != null){
            this.props.pubnub.getMessage(this.props.lobbyChannel, (msg) => {
                // Listen for START
                if(msg.message.gameChannel) {

                    this.gameChannel = msg.message.gameChannel;

                    // Assign the url to users & new properties
                    const newUsersState = this.state.users;
                    let turn = 1;
                    for (let uuid in newUsersState) {
                        newUsersState[uuid].piece_id = pieces[newUsersState[uuid].piece_id];
                        newUsersState[uuid].balance = 1500;
                        newUsersState[uuid].properties = [];
                        newUsersState[uuid].cards = [];
                        newUsersState[uuid].bankrupt = false;
                        newUsersState[uuid].turn = turn;
                        turn++;
                    }
                    console.log(newUsersState);

                    this.setState({
                        started: true
                    })

                    this.props.pubnub.subscribe({
                        channels: [msg.message.gameChannel],
                        withPresence: true
                      });
                }

                // Listen for users
                if (msg.message.users) {
                    this.setState({
                        users: msg.message.users
                    })
                }
                // Listen for picks
                if (this.props.isRoomCreator) {
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
    componentDidMount(){
        console.log('MOUNTED');
        this.pubnubHandler();
    }
    componentDidUpdate(){
        console.log('UPDATED');
        this.pubnubHandler();
    }

    onHover = () => {
        const sound = new Audio(rollover_sound);
        sound.play();
    }
    onClick = (index) => {
        this.props.pubnub.publish({
            message: {myPick: index},
            channel: this.props.lobbyChannel});
        
    }

    renderPieces = ()=> {
        const pieces = [
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''},
            {url: pepe5head, player: ''},
            {url: snorlax, player: ''}
        ];
         
        for (let uuid of Object.keys(this.state.users)) {
            if (this.state.users[uuid].piece_id){
                pieces[this.state.users[uuid].piece_id].player = 'other';
            }
        }
        if (this.state.users[this.state.myUUID]){
            if (this.state.users[this.state.myUUID].hasOwnProperty('piece_id'))
                if (pieces[this.state.users[this.state.myUUID].piece_id] !== undefined) {
                    pieces[this.state.users[this.state.myUUID].piece_id].player = 'self';
                } 
        }

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

    isReady = () => {
        let isReady = true;
        for(let uuid in this.state.users) {
            if(this.state.users[uuid].piece_id === '')
                isReady = false;
        }
        if (isReady){
            console.log('ready papu');
        }
        return isReady;
    }

    start = () => {
        // Send msg to ALL to sub new channel,
        const gameChannel = 'monopolygame--' + shortid.generate().toUpperCase();
        this.props.pubnub.publish({
            message: {gameChannel: gameChannel},
            channel: this.props.lobbyChannel});
    }

    render() {
        return (
            <div>
                {!this.state.started && 
                    <div>
                        <div className="piece-picker">
                            {this.renderPieces()}
                        </div>
                        {this.props.isRoomCreator && <button onClick={()=>this.start()} disabled={!this.isReady()}>Start Game</button>}
                        {this.isReady() && !this.props.isRoomCreator && <div>Waiting for others to pick...</div> }
                    </div>
                }
                {
                    this.state.started && <Game myUUID={this.state.myUUID} isRoomCreator={this.props.isRoomCreator} users={this.state.users} gameChannel={this.gameChannel} pubnub={this.props.pubnub} myTurn={this.state.users[this.state.myUUID].turn}/>
                }
            </div>
        )
    }
    
}

export default PiecePicker;
