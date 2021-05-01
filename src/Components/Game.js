import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';
import Dices from './Dices';
import Swal from "sweetalert2"; 

function getRand(max, offset=1) {
    return Math.round(Math.random() * max + offset);
  }

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            turn: 1,
            eventsQueue: [this.startTurnEvent(1)],
        }
        this.throwCounter = 1;
    }

    // Events
    startTurnEvent(turn){
        this.props.pubnub.publish({
            message: {startTurn: turn},
            channel: this.props.gameChannel
        })
    }
    playTurn(){
        // Jail

        // Business
        const sellTo = (uuid) => {
            const displayPropertiesNCards = () => {
                const my = this.props.users[this.props.myUUID];

                for (let property in my.properties) {

                }
                for (let card in my.cards) {
                    
                }

            }

            if (uuid === 'bank') {

            } else {

            }
        }


        let lista = '';
        let i = 0;
        for(let uuid in this.props.users) {
            if(!this.props.users[uuid].bankrupt) {
                lista +=
                    `<div key={i} class="userCard" onClick={sellTo(${uuid})}>
                        <div class="icon player-${this.props.users[uuid].turn}" ><img src=${this.props.users[uuid].piece_id} alt=${this.props.users[uuid].name}/></div>
                        <div class="name" >${this.props.users[uuid].name}</div>
                </div>`;
            }
        }
        lista += `<div key={i} class="userCard" onClick={sellTo(${bank})}>
                    <div class="icon player-bank" ><img src=${this.props.users[uuid].piece_id} alt="bank"/></div>
                    <div class="name" >Bank</div>
            </div>`;
        console.log(lista);

        Swal.fire({
            title: 'Would you like to sell',
            html: '<div class="userCards">' + lista + '</div>',
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: "Done"
        })
    }
    spectateTurn(){
        console.log('spectating');
    }


    throwAnimation = (dice1Value, dice2Value) => {
        console.log(this.throwCounter,'dices: ',dice1Value, ' - ',dice2Value);
        this.throwCounter++;
    }
    onThrow = () => {
        this.props.pubnub.publish({
            message: {getDicesNumbers: true},
            channel: this.props.gameChannel
        })
    }

    componentDidMount (){
        console.log('mounted boi');
        if(this.props.gameChannel != null){
            this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {
                // Someone left
                if (msg.message.userUUID) {
                    const curUsers = this.state.users;
                    delete curUsers[msg.message.userUUID];

                    this.setState({
                        users: curUsers
                    })
                }

                // startTurn
                if(msg.message.startTurn) {
                    if (msg.message.startTurn === this.props.myTurn) {
                        this.playTurn();
                    } else {
                        this.spectateTurn();
                    }
                }

                // Host
                if (this.props.isRoomCreator){
                    if(msg.message.getDicesNumbers) {
                        const value1 = getRand(5);
                        const value2 = getRand(5);
    
    
                    }
                }
                
            });
        }
    }

    render() {
        return (
            <div className="game">
                {/* {<Dices onClick={this.onThrow} throwAnimation={this.throwAnimation}/>} */}
                <Board users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
            </div>
        )
    }
}

export default Game;

