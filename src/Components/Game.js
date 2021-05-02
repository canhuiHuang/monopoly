import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';
import Dices from './Dices';
import Swal from "sweetalert2";
import properties from './Data/properties.json';

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
            bankProperties: bankProperties
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
        console.log('jugando turno');
        // Jail

        // Business
        const business = () => {
            const displayUsers = () => {

                const sellTo = uuid => {

                    // Display properties & cards
                    const my = this.props.users[this.props.myUUID];

                    // Bank
                    const sellHouses = (property) => {
                        this.props.pubnub.publish({
                            message: {sellHouses: true, property: property},
                            channel: this.props.gameChannel
                        });
                    }
                    const sellProperty = (property) => {
                        this.props.pubnub.publish({
                            message: {sellProperty: true, property: property},
                            channel: this.props.gameChannel
                        });
                    }

                    const propertyCards = '';
                    let i = 0;
                    for (let property in my.properties) {
                        propertyCards +=
                            `<div key=${i} class="propertyCard-with-btns">
                                <div class="propertyCard" onClick={onClickCard(${property})}>
                                    <div class="propertyCard-container">
                                    <div class="name ${property.data.color_set}" >${property.data.property_name}</div>
                                    <img src=${property.image} alt=""/>
                                    <div class="rent" >Rent: $${property.data.rent[0]}</div>
                                    <div class="house" ><div>With 1 House</div><div>$${property.data.rent[1]}</div></div>
                                    <div class="house" ><div>With 2 Houses</div><div>$${property.data.rent[2]}</div></div>
                                    <div class="house" ><div>With 3 Houses</div><div>$${property.data.rent[3]}</div></div>
                                    <div class="house" ><div>With 4 Houses</div><div>$${property.data.rent[4]}</div></div>
                                    <div class="house" ><div>With HOTEL</div><div>${property.data.rent[5]}</div></div>
                                    <div class="mortgage" >Mortgage Value: $${property.data.mortgage_value}</div>
                                    <div class="houses-cost" >Houses cost: $${property.data.house_cost} each</div>
                                    <div class="hotel-cost" >Hotel cost: $${property.data.house_cost} plus 4 houses</div>
                                    <div class="info-footer" >If a player owns ALL the lots of any Color Group, the rent is doubled on unimproved lots while the rent on improved lots is affected by a multiplier.</div>
                                    </div>
                                </div>`;
                        if (property.houses > 0){
                            propertyCards +=
                            `<button key=${i} class="sellHouses-btn" onClick={sellHouses(${property})}>Sell Houses</button>`;
                        }
                        propertyCards +=
                            `<button key=${i} class="sellProperty-btn" onClick={sellProperty(${property})}>Sell Property</button>
                            </div>`;
                            i++;
                    }
                    console.log(propertyCards);
                    Swal.fire({
                        title: 'Select property that you want to sell',
                        html: '<div class="propertyCards">' + propertyCards + '</div>',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        confirmButtonText: "Done"
                    })
                    // for (let card in my.cards) {
                        
                    // }
                }

                // const sellTo = (uuid) => {
                //     //
                //     console.log(uuid);
                // }

                

                let lista = '';
                let i = 0;
                for(let uuid in this.props.users) {
                    if(!this.props.users[uuid].bankrupt) {
                        lista +=
                            `<div key=${i} class="userCard" onClick={sellTo(${uuid})}>
                                <div class="icon player-${this.props.users[uuid].turn}" ><img src=${this.props.users[uuid].piece_id} alt=${this.props.users[uuid].name}/></div>
                                <div class="name" >${this.props.users[uuid].name}</div>
                        </div>`;
                    }
                }
                lista += `<div key=${i} class="userCard" onClick={sellTo('bank')}>
                            <div class="icon player-bank" ><img src=${this.props.users[this.props.myUUID].piece_id} alt="bank"/></div>
                            <div class="name" >Bank</div>
                    </div>`; 
                console.log(lista);
                Swal.fire({
                    title: 'Would you like to sell to someone?',
                    html: '<div class="userCards">' + lista + '</div>',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    confirmButtonText: "Done"
                })

            }
            displayUsers();
        }
        business();
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

                    // Sell Houses to Bank
                    if (msg.message.sellHouses && msg.message.property) {
                        const curUsers = this.props.users;

                        console.log(msg.message.property);
                        const amount = msg.message.property.houses;
                        
                        curUsers[msg.publisher].properties[msg.message.property.camelName].houses = 0;

                        curUsers[msg.publisher].balance += amount*Math.round(curUsers[msg.publisher].properties[msg.message.property.camelName].house_cost / 2);

                        this.setState({
                            users: curUsers
                        });
                        this.props.pubnub.publish({
                            message: {users: this.state.users},
                            channel: this.props.gameChannel
                        })
                    }
                    if (msg.message.sellProperty && msg.message.property) {
                        const curUsers = this.props.users;

                        console.log(msg.message.property);
                        const amount = msg.message.property.houses;
                        
                        delete curUsers[msg.publisher].properties[msg.message.property.camelName];

                        curUsers[msg.publisher].balance += amount*Math.round(curUsers[msg.publisher].properties[msg.message.property.camelName].house_cost / 2) + msg.message.property.mortgage_value;

                        this.setState({
                            users: curUsers
                        });
                        this.props.pubnub.publish({
                            message: {users: this.state.users},
                            channel: this.props.gameChannel
                        })
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

