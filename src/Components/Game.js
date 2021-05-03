import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';
import Dices from './Dices';
import Swal from "sweetalert2";
import properties from './Data/properties.json';
import SellWindow from './SellWindow';

import arizonaCorp from './cardImages/arizonaCorp.png';
import cheetosCorp from './cardImages/cheetosCorp.png'; 
import cityWok from './cardImages/cityWok.png'; 
import forum from './cardImages/forum.png'; 
import helloKittyCorp from './cardImages/helloKittyCorp.png'; 
import hotelCalifornia from './cardImages/hotelCalifornia.jpg'; 
import jardinBotanico from './cardImages/jardinBotanico.png'; 
import jojoConvention from './cardImages/jojoConvention.jpg'; 
import JYPEBuilding from './cardImages/JYPEBuilding.png'; 
import lomita from './cardImages/lomita.png'; 
import quirinoHouse from './cardImages/quirinoHouse.png'; 
import zpaticGamingHouse from './cardImages/zpaticGamingHouse.jpg';
const bankProperties = {
    arizonaCorp: {data: properties.arizonaCorp, image: arizonaCorp, houses: 0},
    cheetosCorp: {data: properties.cheetosCorp, image: cheetosCorp, houses: 0},
    cityWok: {data: properties.cityWok, image: cityWok, houses: 0},
    forum: {data: properties.forum, image: forum, houses: 0},
    helloKittyCorp: {data: properties.helloKittyCorp, image: helloKittyCorp, houses: 0},
    hotelCalifornia: {data: properties.hotelCalifornia, image: hotelCalifornia, houses: 0},
    jardinBotanico: {data: properties.jardinBotanico, image: jardinBotanico, houses: 0},
    jojoConvention: {data: properties.jojoConvention, image: jojoConvention, houses: 0},
    JYPEBuilding: {data: properties.JYPEBuilding, image: JYPEBuilding, houses: 0},
    lomita: {data: properties.lomita, image: lomita, houses: 0},
    quirinoHouse: {data: properties.quirinoHouse, image: quirinoHouse, houses: 0},
    zpaticGamingHouse: {data: properties.zpaticGamingHouse, image: zpaticGamingHouse, houses: 0}
}

function getRand(max, offset=1) {
    return Math.round(Math.random() * max + offset);
  }

export class Game extends Component {
    constructor(props) {
        super(props);
        console.log(properties);

        this.state = {
            users: this.props.users,
            turn: 1,
            eventsQueue: [this.startTurnEvent],
            bankProperties: bankProperties,
            showSellWindow: false
        }
        
        this.throwCounter = 1;
    }

    // Events
    startTurnEvent = () => {
        this.props.pubnub.publish({
            message: {startTurn: this.state.turn},
            channel: this.props.gameChannel
        });
    }

    playTurn = () => {
        console.log('playing');
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

        const users = this.state.users;

        users[this.props.myUUID].properties.lomita = bankProperties.lomita;

        users[this.props.myUUID].properties.quirinoHouse = bankProperties.quirinoHouse;
        users[this.props.myUUID].properties.JYPEBuilding = bankProperties.JYPEBuilding;
        users[this.props.myUUID].properties.jojoConvention = bankProperties.jojoConvention;
        users[this.props.myUUID].properties.jojoConvention.houses = 3;

        users[this.props.myUUID].properties.JYPEBuilding.houses = 5;

        this.setState({
            users: users
        });
        console.log(this.state.users);

        if (this.props.isRoomCreator) {
            console.log('holis');
            const curQueue = this.state.eventsQueue;
            console.log(curQueue);
            (curQueue.shift())();
            

            this.setState({
                eventsQueue: curQueue
            })
        }

        if(this.props.gameChannel != null){
            this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {

                // Listen for users
                if (msg.message.users) {
                    this.setState({
                        users: msg.message.users
                    })
                }

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

                    // Sell Property
                    else if (msg.message.sellProperty) {
                        if (msg.message.user === 'bank'){
                            const curUsers = this.state.users;

                            const amountOfHouses = curUsers[msg.publisher].properties[msg.message.property].houses;
                            
                            const earning = amountOfHouses*Math.round(curUsers[msg.publisher].properties[msg.message.property].data.house_cost / 2) + curUsers[msg.publisher].properties[msg.message.property].data.mortgage_value;
                            curUsers[msg.publisher].balance += earning;

                            delete curUsers[msg.publisher].properties[msg.message.property];

                            this.setState({
                                users: curUsers
                            });
                            this.props.pubnub.publish({
                                message: {users: this.state.users, transactionDone: true},
                                channel: this.props.gameChannel
                            })
                        }
                    }

                    // Sell Houses to Bank
                    else if (msg.message.sellHouses) {
                        const curUsers = this.state.users;

                        const amountOfHouses = curUsers[msg.publisher].properties[msg.message.property].houses;

                        curUsers[msg.publisher].properties[msg.message.property].houses = 0;

                        const earning = amountOfHouses*Math.round(curUsers[msg.publisher].properties[msg.message.property].data.house_cost / 2);
                        curUsers[msg.publisher].balance += earning;
                        this.setState({
                            users: curUsers
                        });
                        this.props.pubnub.publish({
                            message: {users: this.state.users, transactionDone: true},
                            channel: this.props.gameChannel
                        })
                    }
                }
                
            });
        }
    }
    onDone = () => {
        this.setState({
            showSellWindow: false
        })
    }

    render() {
        return (
            <div className="game">
                {this.state.turn === this.props.myTurn && <button className="btn btn-sell" onClick={() => this.setState({
                    showSellWindow: !this.state.showSellWindow
                })}>Sell</button>}
                {this.state.showSellWindow && <SellWindow pubnub={this.props.pubnub} gameChannel={this.props.gameChannel} users={this.state.users} myUUID={this.props.myUUID} onDone={this.onDone}/>}
                {/* {<Dices onClick={this.onThrow} throwAnimation={this.throwAnimation}/>} */}
                <Board users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
            </div>
        )
    }
}

export default Game;

