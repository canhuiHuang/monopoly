import React, { Component } from 'react'

export class OnlineStatus extends Component {

    renderUsers = () => {
        const lista = []
        for(let uuid in this.props.users) {
            // console.log('online users',uuid, this.props.users, this.props.users[uuid]);
            lista.push(
            <div className="onlineUser">
                <div className="icon" ><img src={this.props.users[uuid].piece_id} alt={this.props.users[uuid].name}/></div>
                <div className="name" >{this.props.users[uuid].name}</div>
            </div>)
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

export default OnlineStatus
