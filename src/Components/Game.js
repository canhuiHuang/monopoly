import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';
import Dices from './Dices';

function getRand(max, offset=1) {
    return Math.round(Math.random() * max + offset);
  }

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            turn: 1,
            eventsQueue: [startTurnEvent(1)],
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
                {<Dices onClick={onThrow} throwAnimation={this.throwAnimation}/>}
                <Board users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
            </div>
        )
    }
}

export default Game;

