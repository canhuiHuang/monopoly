import React, { Component } from 'react';
import bankImage from './cardImages/bank.png'; 
import SellPropertiesWindow from './SellPropertiesWindow';

export class SellWindow extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedUser: null
        }
    }
    selectUser = (user) => {
        this.setState({
            selectedUser: user
        });
    }

    renderUsers = () => {
        let lista = [];
        let i = 0;
        lista.push(
            <div key={i} className="userCard bank" onClick={() => this.selectUser('bank')}>
                <div className={`icon player-bank`} ><img src={bankImage} alt='bank'/></div>
                <div className="name">Bank</div>
            </div>
        );
        if (!this.props.strictMode){
            for(let uuid in this.props.users) {
                i++;  
                if(!this.props.users[uuid].bankrupt && uuid !== this.props.myUUID) {
                    lista.push(
                        <div key={i} className="userCard" onClick={() => this.selectUser(uuid)}>
                            <div className={`icon player-${this.props.users[uuid].turn}`} ><img src={this.props.users[uuid].piece_id} alt={this.props.users[uuid].name}/></div>
                            <div className="name" >{this.props.users[uuid].name}</div>
                        </div>
                    );
                }
            }
        }
        return lista;
    }

    render() {
        return (
            <div className="sell-container">
                {this.state.selectedUser !== null && <SellPropertiesWindow pubnub={this.props.pubnub} gameChannel={this.props.gameChannel} onOffer={this.props.onOffer} selectedUser={this.state.selectedUser} users={this.props.users} myUUID={this.props.myUUID} selectUser={this.selectUser}/>}
                <div className="sellWindow">
                    <div className="title-sell">Who are you selling to?</div>
                    <div className="userCards">
                        {this.renderUsers()}
                    </div>
                    <button className="btn btn-done" onClick={() => {this.props.onDone()}} disabled={this.props.strictMode}>Done</button>
                </div>
                <div className="layer"></div>
            </div>
        )
    }
}

export default SellWindow;
