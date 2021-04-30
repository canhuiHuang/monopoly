import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            turn: 1
        }
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
            });
        }
    }

    render() {
        return (
            <div className="game">
                <Board users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
            </div>
        )
    }
}

export default Game;

