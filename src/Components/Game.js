import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import OnlineStatus from './OnlineStatus';
import Dices from './Dices';
import Swal from "sweetalert2";
import properties from './Data/properties.json';
import SellWindow from './SellWindow';
import WaitingForOffer from './WaitingForOffer';
import Deck from './Deck';

import altarDeReyes from './cardImages/altarDeReyes.png';
import appleStore from './cardImages/appleStore.jpg';
import arizonaCorp from './cardImages/arizonaCorp.png'
import bodegaAurrera from './cardImages/bodegaAurrera.jpg';
import casaDeSteve from './cardImages/casaDeSteve.JPG';
import cheetosCorp from './cardImages/cheetosCorp.png';
import cinepolis from './cardImages/cinepolis.JPG';
import citadelOfRicks from './cardImages/citadelOfRicks.png';
import cityWok from './cardImages/cityWok.png';
import demaciaVice from './cardImages/demaciaVice.png';
import forum from './cardImages/forum.png';
import globoDelEquipoRocket from './cardImages/globoDelEquipoRocket.JPG';
import helloKittyCorp from './cardImages/helloKittyCorp.png';
import hotelCalifornia from './cardImages/hotelCalifornia.jpg';
import jardinBotanico from './cardImages/jardinBotanico.png';
import jojoConvention from './cardImages/jojoConvention.jpg';
import JYPEBuilding from './cardImages/JYPEBuilding.png';
import laCasaDeTuCorazon from './cardImages/laCasaDeTuCorazon.JPG';
import lomita from './cardImages/lomita.png';
import montanaZopilote from './cardImages/montanaZopilote.JPG';
import quirinoHouse from './cardImages/quirinoHouse.png';
import zpaticGamingHouse from './cardImages/zpaticGamingHouse.jpg';
import glokmelkerPortal from './cardImages/glokmelkerPortal.JPG';
import niflheimViggoPortal from './cardImages/niflheimViggoPortal.JPG';
import middlenwoodPortal from './cardImages/middlenwoodPortal.JPG';
import dunklerGartenPortal from './cardImages/dunklerGartenPortal.JPG';
import goldMine from './cardImages/goldMine.png';
import cfe from './cardImages/cfe.JPG';

const allProperties = {
    laCasaDeTuCorazon: {data: properties.laCasaDeTuCorazon, image: laCasaDeTuCorazon, houses: 0},
    casaDeSteve: {data: properties.casaDeSteve, image: casaDeSteve, houses: 0},
    glokmelkerPortal: {data: properties.glokmelkerPortal, image: glokmelkerPortal, houses: 0},
    globoDelEquipoRocket: {data: properties.globoDelEquipoRocket, image: globoDelEquipoRocket, houses: 0},
    montanaZopilote: {data: properties.montanaZopilote, image: montanaZopilote, houses: 0},
    altarDeReyes: {data: properties.altarDeReyes, image: altarDeReyes, houses: 0},

    quirinoHouse: {data: properties.quirinoHouse, image: quirinoHouse, houses: 0},
    goldMine: {data: properties.goldMine, image: goldMine, houses: 0},
    jardinBotanico: {data: properties.jardinBotanico, image: jardinBotanico, houses: 0},
    JYPEBuilding: {data: properties.JYPEBuilding, image: JYPEBuilding, houses: 0},
    niflheimViggoPortal: {data: properties.niflheimViggoPortal, image: niflheimViggoPortal, houses: 0},
    cityWok: {data: properties.cityWok, image: cityWok, houses: 0},
    lomita: {data: properties.lomita, image: lomita, houses: 0},
    forum: {data: properties.forum, image: forum, houses: 0},

    hotelCalifornia: {data: properties.hotelCalifornia, image: hotelCalifornia, houses: 0},
    cheetosCorp: {data: properties.cheetosCorp, image: cheetosCorp, houses: 0},
    helloKittyCorp: {data: properties.helloKittyCorp, image: helloKittyCorp, houses: 0},
    middlenwoodPortal: {data: properties.middlenwoodPortal, image: middlenwoodPortal, houses: 0},
    arizonaCorp: {data: properties.arizonaCorp, image: arizonaCorp, houses: 0},
    zpaticGamingHouse: {data: properties.zpaticGamingHouse, image: zpaticGamingHouse, houses: 0},
    cfe: {data: properties.cfe, image: cfe, houses: 0},
    jojoConvention: {data: properties.jojoConvention, image: jojoConvention, houses: 0},

    demaciaVice: {data: properties.demaciaVice, image: demaciaVice, houses: 0},
    bodegaAurrera: {data: properties.bodegaAurrera, image: bodegaAurrera, houses: 0},
    citadelOfRicks: {data: properties.citadelOfRicks, image: citadelOfRicks, houses: 0},
    dunklerGartenPortal: {data: properties.dunklerGartenPortal, image: dunklerGartenPortal, houses: 0},
    cinepolis: {data: properties.cinepolis, image: cinepolis, houses: 0},
    appleStore: {data: properties.appleStore, image: appleStore, houses: 0},
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
            allProperties: allProperties,
            showSellWindow: false,
            sellDisabled: false,
            consecutiveThrows: 0,
            dicesValues: {value1: 1, value2: 2},
            rollIt: false
        }
        this.movePiece = this.movePiece.bind(this);
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

    dicesAnimation = (dice1Value, dice2Value) => {
        console.log('dices: ',dice1Value, ' - ',dice2Value);
    }

    onOffer = () => {
        this.setState({
            sellDisabled: true
        })
    }
    
    movePiece = (userUUID, increment) => {
        const curUsers = this.state.users;
        curUsers[userUUID].position = (curUsers[userUUID].position + increment) % 40;
        this.setState({
            users: curUsers
        })
    }

    componentDidMount (){
        console.log('mounted boi');

        const users = this.state.users;

        users[this.props.myUUID].properties.lomita = allProperties.lomita;

        users[this.props.myUUID].properties.quirinoHouse = allProperties.quirinoHouse;
        users[this.props.myUUID].properties.JYPEBuilding = allProperties.JYPEBuilding;
        users[this.props.myUUID].properties.cinepolis = allProperties.cinepolis;

        users[this.props.myUUID].properties.cinepolis.houses = 3;
        users[this.props.myUUID].properties.JYPEBuilding.houses = 5;

        users[this.props.myUUID].properties.cfe = allProperties.cfe;
        users[this.props.myUUID].properties.middlenwoodPortal = allProperties.middlenwoodPortal;

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
                console.log('IN GAME');
                // Listen for users
                if (msg.message.users) {
                    this.setState({
                        users: msg.message.users
                    })
                }

                // Listen for dices result 
                if (msg.message.dicesResult) {
                    
                    this.setState({
                        rollIt: true
                    })
                    // Update Dices
                    const updateDices = () => {
                        this.setState({
                            dicesValues: msg.message.dicesResult
                        })
                        this.setState({
                            rollIt: false
                        })
                    };
                    const move = (increment) => {
                        this.movePiece(msg.message.dicesThrower, increment);
                    }


                    function one(callback) {
                        return new Promise(function(resolve, reject) {
                            updateDices();
                            resolve();
                        })
                      }
                      
                    function moveAnimation() {
                        console.log("second function executed");
                        //Go to jail
                        if (msg.message.dicesResult.consecutiveThrows === 3){
                            move('jail');
                        } else {
                            const randInterval = Math.round((Math.random() * 101) + 200);
                            setTimeout(()=>{
                                let i = 0;
                                var handler = setInterval(() => {
                                    move(1);
                                    i++;
                                    if (i >= msg.message.dicesResult.value1 + msg.message.dicesResult.value2) {
                                        clearInterval(handler);
                                    }
                                }, randInterval);
                            }, 2850)
                        }
                    }
                      
                    one().then(moveAnimation);       

                    

                    // More stuff

                }

                // Listen for successful offers
                if (msg.message.transactionDone && (msg.message.successful_seller === this.props.myUUID || msg.message.successful_buyer === this.props.myUUID)) {
                    if (msg.message.soldToBank) {
                        Swal.fire('Order completed!', '', 'success');
                    } else {
                        Swal.fire('Offer Taken!', '', 'success');
                    }
                    this.setState({
                        sellDisabled: false
                    })
                }
                // Listen for unsucessful offers
                if (msg.message.deny && msg.message.sellerUUID === this.props.myUUID ) {
                    Swal.fire('Offer Denied!', '', 'error');
                    this.setState({
                        sellDisabled: false
                    })
                }

                // Listen for Sell offers as Buyer
                if (msg.message.sellProperty && msg.message.user === this.props.myUUID) {
                    Swal.fire({
                        title: `${this.state.users[msg.publisher].name} wants to sell you ${allProperties[msg.message.property].data.property_name} for $${msg.message.price}`,
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: `Take Offer`,
                        denyButtonText: `Deny Offer`,
                      }).then((result) => { 
                        if (result.isConfirmed) {
                            this.props.pubnub.publish({
                                message: {sellerUUID: msg.publisher, buyerUUID: this.props.myUUID, accept: true, property: msg.message.property, offer: msg.message.price},
                                channel: this.props.gameChannel
                            })
                        } else if (result.isDenied || result.isDismissed) {
                            this.props.pubnub.publish({
                                message: {sellerUUID: msg.publisher, deny: true, property: msg.message.property},
                                channel: this.props.gameChannel
                            })
                          Swal.fire('Offer Denied', '', 'info');
                        }
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
                        
                        let curConsecutiveThrows = this.state.consecutiveThrows;
                        curConsecutiveThrows++;
                        if (curConsecutiveThrows === 3) {
                            this.setState({
                                consecutiveThrows: 0
                            })
                        }
                        
                        this.props.pubnub.publish({
                            message: {dicesResult: {value1: value1, value2: value2, consecutiveThrows: curConsecutiveThrows}, dicesThrower: msg.publisher},
                            channel: this.props.gameChannel
                        })
    
                    }
                    // Listen for succesfull offers
                    else if (msg.message.accept) {
                        const curUsers = this.state.users;

                        // Seller
                        curUsers[msg.message.sellerUUID].balance += parseInt(msg.message.offer);
                        const transferedProperty = curUsers[msg.message.sellerUUID].properties[msg.message.property];
                        delete curUsers[msg.message.sellerUUID].properties[msg.message.property];

                        // Buyer
                        curUsers[msg.message.buyerUUID].properties[msg.message.property] = transferedProperty;
                        curUsers[msg.message.buyerUUID].balance -= msg.message.offer;

                        this.setState({
                            users: curUsers
                        })

                        // Publish results
                        this.props.pubnub.publish({
                            message: {
                                users: this.state.users, 
                                transactionDone: true, 
                                successful_seller: msg.message.sellerUUID, 
                                successful_buyer: msg.message.buyerUUID, 
                                broadcast_message: `${curUsers[msg.message.sellerUUID].name} sold ${allProperties[msg.message.property].property_name} to ${curUsers[msg.message.buyerUUID].name} for $${msg.message.offer}.`},
                            channel: this.props.gameChannel
                        })
                    }

                    // Sell Property to bank
                    else if (msg.message.sellProperty && msg.message.user === 'bank') {
                        const curUsers = this.state.users;

                        const amountOfHouses = curUsers[msg.publisher].properties[msg.message.property].houses;
                        
                        const earning = amountOfHouses*Math.round(curUsers[msg.publisher].properties[msg.message.property].data.house_cost / 2) + curUsers[msg.publisher].properties[msg.message.property].data.mortgage_value;
                        curUsers[msg.publisher].balance += earning;

                        delete curUsers[msg.publisher].properties[msg.message.property];

                        this.setState({
                            users: curUsers
                        });
                        this.props.pubnub.publish({
                            message: {successful_seller: msg.publisher, soldToBank: true,users: this.state.users, transactionDone: true, broadcast_message: `${curUsers[msg.publisher].name} sold ${allProperties[msg.message.property].property_name} to the bank for $${earning}.`},
                            channel: this.props.gameChannel
                        })
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
                            message: {successful_seller: msg.publisher, soldToBank: true,users: this.state.users, transactionDone: true, broadcast_message: `${curUsers[msg.publisher].name} sold the houses of ${allProperties[msg.message.property].property_name} to the bank for $${earning}.`},
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
    throwDices = () => {
        this.setState({
            sellDisabled: true,
        });
        this.props.pubnub.publish({
            message: {getDicesNumbers: true},
            channel: this.props.gameChannel
        })
    }

    render() {
        return (
            <div className="game">
                {this.state.turn === this.props.myTurn && 
                    <div>
                        <button disabled={this.state.sellDisabled}className="btn btn-sell" onClick={() => this.setState({
                        showSellWindow: !this.state.showSellWindow
                        })}>Sell</button> 
                        <button className="btn btn-dices" onClick={()=> this.throwDices()}>Throw Dices</button>
                    </div>}
                {this.state.showSellWindow && (!this.state.sellDisabled? <SellWindow pubnub={this.props.pubnub} gameChannel={this.props.gameChannel} users={this.state.users} myUUID={this.props.myUUID} onDone={this.onDone} onOffer={this.onOffer}/> : <WaitingForOffer />)}
                <Dices dicesValues={this.state.dicesValues} rollIt={this.state.rollIt}/>
                <Deck properties={this.state.users[this.props.myUUID].properties}/>
                <Board allProperties={this.state.allProperties} users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
                <div className="barra"></div>
            </div>
        )
    }
}

export default Game;

