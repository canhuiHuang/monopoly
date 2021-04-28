import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
        }
    }

    render() {
        return (
            <div>
                <Board />
                <div className="UI">
                    <UsersStats />
                    <OnlineStatus users={this.state.users}/>
                    holii
                </div>
            </div>
        )
    }
}

export default Game;

