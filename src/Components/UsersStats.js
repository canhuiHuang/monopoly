import React, { Component } from 'react';
import UserStat from './userStat';

export class UsersStats extends Component {
    
    renderUsers = () => {
        const lista = []
        let i = 0;
        for(let uuid in this.props.users) {
            if(!this.props.users[uuid].bankrupt) {
                lista.push(
                    <UserStat key={i} user={this.props.users[uuid]} turn={this.props.turn}/>
                )
                i++;
            }
        }
        return lista;
    }

    render() {
        return (
            <div className="onlineUsers">
                {this.renderUsers()}
            </div>
        )
    }
}

export default UsersStats
