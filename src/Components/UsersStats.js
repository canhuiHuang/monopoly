import React, { Component } from 'react'

export class UsersStats extends Component {
    renderUsers = () => {
        const lista = []
        let i = 0;
        for(let uuid in this.props.users) {
            if(!this.props.users[uuid].bankrupt) {
                lista.push(
                    <div key={i} className={`onlineUser ${this.props.turn === this.props.users[uuid].turn? 'myTurn' : ''}`}>
                        <div className="top">
                            <div className={`icon player-${this.props.users[uuid].turn}`} ><img src={this.props.users[uuid].piece_id} alt={this.props.users[uuid].name}/></div>
                            <div className="name" >{this.props.users[uuid].name}</div>
                        </div>
                        <div className="bottom">
                            <div className="balance">{`$${this.props.users[uuid].balance}`}</div>
                        </div>
                    </div>)
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
