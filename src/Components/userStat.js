import React, { Component } from 'react';
import CountUp from 'react-countup';

export class userStat extends Component {
    formatValue = value => `$ ${Number(value).toFixed(0)}`;

    constructor(props){
        super(props);

        this.state = {
            balance: 1500,
            duration: 1.2,
        }
    }

    render() {
        return (
            <div className={`onlineUser ${this.props.turn === this.props.user.turn? 'myTurn' : ''}`}>
                <div className="top">
                    <div className={`icon player-${this.props.user.turn}`} ><img src={this.props.user.piece_id} alt={this.props.user.name}/></div>
                    <div className="name" >{this.props.user.name}</div>
                </div>
                <div className="bottom">
                    <div className="balance">
                        $<CountUp
                            start={this.state.balance}
                            end={this.props.user.balance}
                            duration={this.state.duration}
                            onEnd={() => {
                                if (this.props.user.balance !== this.state.balance){
                                    this.setState({
                                        balance: this.props.user.balance
                                    })
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default userStat
