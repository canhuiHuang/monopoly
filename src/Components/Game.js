import React, { Component } from 'react'
import Board from './Board';
import UsersStats from './UsersStats';
import buyWindow from './buyWindow';
import OnlineStatus from './OnlineStatus';
import Dices from './Dices';
import Swal from "sweetalert2";
import jsx_swal from '@sweetalert/with-react';
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
    laCasaDeTuCorazon: {data: properties.laCasaDeTuCorazon, image: laCasaDeTuCorazon, houses: 0, owner: ''},
    casaDeSteve: {data: properties.casaDeSteve, image: casaDeSteve, houses: 0, owner: ''},
    glokmelkerPortal: {data: properties.glokmelkerPortal, image: glokmelkerPortal, houses: 0, owner: ''},
    globoDelEquipoRocket: {data: properties.globoDelEquipoRocket, image: globoDelEquipoRocket, houses: 0, owner: ''},
    montanaZopilote: {data: properties.montanaZopilote, image: montanaZopilote, houses: 0, owner: ''},
    altarDeReyes: {data: properties.altarDeReyes, image: altarDeReyes, houses: 0, owner: ''},

    quirinoHouse: {data: properties.quirinoHouse, image: quirinoHouse, houses: 0, owner: ''},
    goldMine: {data: properties.goldMine, image: goldMine, houses: 0, owner: ''},
    jardinBotanico: {data: properties.jardinBotanico, image: jardinBotanico, houses: 0, owner: ''},
    JYPEBuilding: {data: properties.JYPEBuilding, image: JYPEBuilding, houses: 0, owner: ''},
    niflheimViggoPortal: {data: properties.niflheimViggoPortal, image: niflheimViggoPortal, houses: 0, owner: ''},
    cityWok: {data: properties.cityWok, image: cityWok, houses: 0, owner: ''},
    lomita: {data: properties.lomita, image: lomita, houses: 0, owner: ''},
    forum: {data: properties.forum, image: forum, houses: 0, owner: ''},

    hotelCalifornia: {data: properties.hotelCalifornia, image: hotelCalifornia, houses: 0, owner: ''},
    cheetosCorp: {data: properties.cheetosCorp, image: cheetosCorp, houses: 0, owner: ''},
    helloKittyCorp: {data: properties.helloKittyCorp, image: helloKittyCorp, houses: 0, owner: ''},
    middlenwoodPortal: {data: properties.middlenwoodPortal, image: middlenwoodPortal, houses: 0, owner: ''},
    arizonaCorp: {data: properties.arizonaCorp, image: arizonaCorp, houses: 0, owner: ''},
    zpaticGamingHouse: {data: properties.zpaticGamingHouse, image: zpaticGamingHouse, houses: 0, owner: ''},
    cfe: {data: properties.cfe, image: cfe, houses: 0, owner: ''},
    jojoConvention: {data: properties.jojoConvention, image: jojoConvention, houses: 0, owner: ''},

    demaciaVice: {data: properties.demaciaVice, image: demaciaVice, houses: 0, owner: ''},
    bodegaAurrera: {data: properties.bodegaAurrera, image: bodegaAurrera, houses: 0, owner: ''},
    citadelOfRicks: {data: properties.citadelOfRicks, image: citadelOfRicks, houses: 0, owner: ''},
    dunklerGartenPortal: {data: properties.dunklerGartenPortal, image: dunklerGartenPortal, houses: 0, owner: ''},
    cinepolis: {data: properties.cinepolis, image: cinepolis, houses: 0, owner: ''},
    appleStore: {data: properties.appleStore, image: appleStore, houses: 0, owner: ''},
}
const positionsArray = [
    {type: 'GO'},
    {type: 'normal', property: allProperties.laCasaDeTuCorazon},
    {type: 'chest'},
    {type: 'normal', property: allProperties.casaDeSteve},
    {type: 'tax'},
    {type: 'normal', property: allProperties.glokmelkerPortal},
    {type: 'normal', property: allProperties.globoDelEquipoRocket},
    {type: 'chance'},
    {type: 'normal', property: allProperties.montanaZopilote},
    {type: 'normal', property: allProperties.altarDeReyes},
    {type: 'visit'},
    {type: 'normal', property: allProperties.quirinoHouse},
    {type: 'utility', property: allProperties.goldMine},
    {type: 'normal', property: allProperties.jardinBotanico},
    {type: 'normal', property: allProperties.JYPEBuilding},
    {type: 'normal', property: allProperties.niflheimViggoPortal},
    {type: 'normal', property: allProperties.cityWok},
    {type: 'chest'},
    {type: 'normal', property: allProperties.lomita},
    {type: 'normal', property: allProperties.forum},
    {type: 'visit'},
    {type: 'normal', property: allProperties.hotelCalifornia},
    {type: 'chance'},
    {type: 'normal', property: allProperties.cheetosCorp},
    {type: 'normal', property: allProperties.helloKittyCorp},
    {type: 'normal', property: allProperties.middlenwoodPortal},
    {type: 'normal', property: allProperties.arizonaCorp},
    {type: 'normal', property: allProperties.zpaticGamingHouse},
    {type: 'utility', property: allProperties.cfe},
    {type: 'normal', property: allProperties.jojoConvention},
    {type: 'goToJail'},
    {type: 'normal', property: allProperties.demaciaVice},
    {type: 'normal', property: allProperties.bodegaAurrera},
    {type: 'chest'},
    {type: 'normal', property: allProperties.citadelOfRicks},
    {type: 'normal', property: allProperties.dunklerGartenPortal},
    {type: 'chance'},
    {type: 'normal', property: allProperties.cinepolis},
    {type: 'tax'},
    {type: 'normal', property: allProperties.appleStore},
];

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
            strictMode: false,
            sellDisabled: false,
            consecutiveThrows: 0,
            dicesValues: {value1: 1, value2: 2},
            rollIt: false
        }
        this.movePiece = this.movePiece.bind(this);
    }

    htmlPropertyCard = (property) => {
        if (property.data.type === 'normal'){
            return `
                <div class="propertyCard">
                    <div class="propertyCard-container">
                        <div class=${`name ${property.data.color_set}`} >${property.data.property_name}</div>
                        <img src=${property.image} alt=""/>
                        <div class="rent" >RENT:  $${property.data.rent[0]}</div>
                        <div class="house" ><div>With 1 House</div><div>$${property.data.rent[1]}</div></div>
                        <div class="house" ><div>With 2 Houses</div><div>$${property.data.rent[2]}</div></div>
                        <div class="house" ><div>With 3 Houses</div><div>$${property.data.rent[3]}</div></div>
                        <div class="house" ><div>With 4 Houses</div><div>$${property.data.rent[4]}</div></div>
                        <div class="house" ><div>With HOTEL</div><div>$${property.data.rent[5]}</div></div>
                        <div class="mortgage" >Bank Sell Price: $${property.data.mortgage_value}</div>
                        <div class="houses-cost" >Houses cost: $${property.data.house_cost} each</div>
                        <div class="hotel-cost" >Hotel cost: $${property.data.house_cost} plus 4 houses</div>
                        <div class="info-footer" >If a player owns ALL the lots of any Color Group, the rent is doubled on unimproved lots while the rent on improved lots is affected by a multiplier.</div>
                    </div>
                </div>
            `
        } else if (property.data.type === 'transport') {
            return `
                <div class="propertyCard">
                    <div class="propertyCard-container">
                        <img class="transport" src=${property.image} alt=""/>
                        <div class="line line-top"></div>
                        <div class='special-name'>${property.data.property_name}</div>
                        <div class="line line-bottom"></div>
    
                        <div class="house" ><div>Rent</div><div>$${property.data.rent[0]}</div></div>
                        <div class="house" ><div>If 2 portals</div><div>$${property.data.rent[1]}</div></div>
                        <div class="house" ><div>If 3   ...</div><div>$${property.data.rent[2]}</div></div>
                        <div class="house" ><div>If 4   ...</div><div>$${property.data.rent[3]}</div></div>
                        <div class="house mortgage-transport" ><div>Bank Sell Price</div><div>$${property.data.mortgage_value}</div></div>
                    </div>
                </div>
            `
        } else if (property.data.type === 'utility') {
            return`
                <div class="propertyCard">
                    <div class="propertyCard-container">
                        <img class="utility" src=${property.image} alt=""/>
                        <div class="line line-top"></div>
                        <div class='special-name'>${property.data.property_name}</div>
                        <div class="line line-bottom"></div>
    
                        <div class="desc">If one "Utility" is owned, rent is ${property.data.multiplier_value[0]} times amount shown on dice.</div>
                        <div class="desc">If both "Utilities" are owned, rent is ${property.data.multiplier_value[1]} times amount shown on dice.</div>
                        <div class="house mortgage-utility" ><div>Bank Sell Price</div><div>$${property.data.mortgage_value}</div></div>
                    </div>
                </div>
            `
        } else return `<div class="error">something is wrong :p</div>`
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
        if (increment === 'jail') {
            const curUsers = this.state.users;
            curUsers[userUUID].position = 40;
            this.setState({
                users: curUsers
            })
        } else {
            const curUsers = this.state.users;
            curUsers[userUUID].position = (curUsers[userUUID].position + increment) % 40;
            if (curUsers[userUUID].position === 0) {
                curUsers[userUUID].balance += 200;
            }
            this.setState({
                users: curUsers
            })
        }
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
                // Listen for allProperties
                if (msg.message.allProperties) {
                    this.setState({
                        allProperties: msg.message.allProperties
                    })
                }

                // Listen for dices result 
                if (msg.message.dicesResult) {
                     
                    let moving = false;
                    // Update Dices
                    const updateDices = (result) =>{
                        this.setState({
                            rollIt: true
                        })
                        this.setState({
                            dicesValues: result
                        })
                        this.setState({
                            rollIt: false
                        })
                    };
                    const move = (increment) => {
                        this.movePiece(msg.message.dicesThrower, increment);
                    }
                    const landing = () =>{
                        const curPosition = this.state.users[msg.message.dicesThrower].position;
                        let owner;
                        if (positionsArray[curPosition].property) {
                            owner = this.state.allProperties[positionsArray[curPosition].property.data.camelName].owner;
                        }
                        
                        // Everyone
                        if (positionsArray[curPosition].type === 'normal' || positionsArray[curPosition].type === 'utility'){                     
                            const payRent = (landerUUID, ownerUUID, propertyName) => {
                                const lander = this.state.users[landerUUID];
                                const owner = this.state.users[ownerUUID];

                                const type = positionsArray[lander.position];

                                let rentToPay;
                                // Compute rentToPay according to property types
                                // For normals
                                if (type === "normal") {
                                    // Get rent's price
                                    const houses = owner.properties[propertyName].houses;
                                    rentToPay = owner.properties[propertyName].data.rent[houses];

                                    // If owner has color set, apply multiplier
                                    const colorSet = owner.properties[propertyName].data.color_set;
                                    let colorSetCount = 0;
                                    for(let property in owner.properties) {
                                        if (owner.properties[property].data.color_set === colorSet) {
                                            colorSetCount++;
                                        }
                                    }
                                    if (colorSetCount === this.state.allProperties[propertyName].data.totals_in_set) {
                                        rentToPay = Math.round(rentToPay * this.state.allProperties[propertyName].data.multiplier_value);
                                    }
                                } else if (type === "transport") {
                                    // Get multiplier
                                    const colorSet = owner.properties[propertyName].data.color_set;
                                    let colorSetCount = 0;
                                    for(let property in owner.properties) {
                                        if (owner.properties[property].data.color_set === colorSet) {
                                            colorSetCount++;
                                        }
                                    }

                                    // Get rent's price
                                    rentToPay = owner.properties[propertyName].data.rent[colorSetCount];

                                } else if (type === "utility") {
                                    // Dices Animation
                                    updateDices(msg.message.utilityLandingValues);

                                    // Get multiplier
                                    let utilitiesCount = 0;
                                    for(let property in owner.properties) {
                                        if (owner.properties[property].data.type === "utility") {
                                            utilitiesCount++;
                                        }
                                    }
                                    const multiplier = owner.properties[propertyName].data.multiplier_value[utilitiesCount - 1];

                                    // Get rent's price
                                    const resultadosDeDados = msg.message.utilityLandingValues.value1 + msg.message.utilityLandingValues.value2;
                                    rentToPay = resultadosDeDados * multiplier;
                                }

                                // Get the maximum amount of money from lander first
                                if (lander.balance >= rentToPay) {
                                    lander.balance -= rentToPay;
                                    owner.balance += rentToPay;

                                    const curUsers = this.state.users;
                                    curUsers[landerUUID] = lander;
                                    curUsers[ownerUUID] = owner;
                                    this.setState({
                                        users: curUsers
                                    })
                                    this.props.pubnub.publish({
                                        message: {users: this.state.users},
                                        channel: this.props.gameChannel
                                    });
                                }   // Wait for lander to pay.
                                else {
                                    if (landerUUID === this.props.myUUID) {
                                        const my = this.state.users[landerUUID];
                                        // Calculate worth of all owned properties
                                        let assests = 0;
                                        for (let property in my.properties) {
                                            assests += my.properties[property].data.mortgage_value + my.properties[property].houses * my.properties[property].house_cost;
                                        }

                                        const amountDue = rentToPay - lander.balance;
                                        if (assests >= amountDue) {
                                            this.setState({
                                                showSellWindow: true,
                                                strictMode: true
                                            })
                                            console.log('1- set -- -- STRICT MODE');

                                            while (this.state.strictMode) {
                                                console.log('2- STRICT MODE');
                                                if (this.state.users[landerUUID].balance >= rentToPay) {
                                                    // pay
                                                    const victim = this.state.users[landerUUID];
                                                    victim.balance -= rentToPay;
                                                    owner.balance += rentToPay;
    
                                                    const curUsers = this.state.users;
                                                    curUsers[landerUUID] = victim;
                                                    curUsers[ownerUUID] = owner;
                                                    this.setState({
                                                        users: curUsers,
                                                        strictMode: false
                                                    })
                                                    this.props.pubnub.publish({
                                                        message: {users: this.state.users},
                                                        channel: this.props.gameChannel
                                                    });
                                                }
                                            }
                                        } else {
                                            // Pay a little & die
                                            lander.balance -= rentToPay;
                                            lander.bankrupt = true;
                                            owner.balance += rentToPay;

                                            const curUsers = this.state.users;
                                            curUsers[landerUUID] = lander;
                                            curUsers[ownerUUID] = owner;
                                            this.setState({
                                                users: curUsers
                                            })
                                            this.props.pubnub.publish({
                                                message: {users: this.state.users},
                                                channel: this.props.gameChannel
                                            });
                                        }
                                    }
                                }
                            }

                            if (owner !== '') {
                                payRent(msg.message.dicesThrower, owner, positionsArray[curPosition].property.data.camelName);
                            }

                        } else if (positionsArray[curPosition].type === 'chest') {
                            Swal.fire('Testing Chest!', '', 'question');
                        } else if (positionsArray[curPosition].type === 'chance') {
                            Swal.fire('Testing Chance!', '', 'question');
                        } else if (positionsArray[curPosition].type === 'goToJail') {
                            Swal.fire(`${this.state.users[msg.message.dicesThrower].name} goes to Jail`, '', 'info');
                            move('jail');
                        } else if (positionsArray[curPosition].type === 'GO') {
                            Swal.fire('Testing GO!', '', 'success');
                            // getMoney here
                        } else if (positionsArray[curPosition].type === 'tax') {
                            Swal.fire('Testing tax!', '', 'warning');
                            // Pay here
                        }

                        // dicesThrower
                        if (msg.message.dicesThrower === this.props.myUUID) {
                            if (positionsArray[curPosition].type === 'normal' || positionsArray[curPosition].type === 'utility') {

                                const property = positionsArray[curPosition].property;

                                if (owner === '' && this.state.users[this.props.myUUID].balance >= property.data.price) {
                                    // Swal.fire(`Would you like to purchase ${property.property_name}?`, '', 'info'); // Update it with Swal/with-react later
                                    Swal.fire({
                                        title: `Would you like to purchase ${property.data.property_name}?`,
                                        html: this.htmlPropertyCard(property),
                                        showDenyButton: true,
                                        showCancelButton: true,
                                        confirmButtonText: `Save`,
                                        denyButtonText: `Don't save`,
                                      }).then((result) => {
                                        /* Read more about isConfirmed, isDenied below */
                                        if (result.isConfirmed) {
                                          Swal.fire('Saved!', '', 'success')
                                        } else if (result.isDenied) {
                                          Swal.fire('Changes are not saved', '', 'info')
                                        }
                                      })
                                } else if (owner === this.props.myUUID && positionsArray[curPosition].type === 'normal') {
                                    if (this.state.users[this.props.myUUID].balance >= property.data.house_cost)
                                    Swal.fire(`Would you like to improve ${property.data.property_name} for $${property.data.house_cost}?`, '', 'info'); // Update it with Swal/with-react later
                                }
                            }
                        }
                    }
                      
                    const moveAnimation = () => {
                        moving = true;
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
                                        setTimeout(()=> {landing()}, 220)
                                    }
                                }, randInterval);
                            }, 2850)
                        }
                    }

                    updateDices(msg.message.dicesResult);
                    moveAnimation();

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
                        
                        const util_value1 = getRand(5);
                        const util_value2 = getRand(5);
                        this.props.pubnub.publish({
                            message: {dicesResult: {value1: value1, value2: value2, consecutiveThrows: curConsecutiveThrows}, dicesThrower: msg.publisher, utilityLandingValues: {value1: util_value1, value2: util_value2}},
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

                        // Set owner on allProperties
                        const curAllProperties = this.state.allProperties;
                        curAllProperties[msg.message.property].owner = msg.message.buyerUUID;

                        this.setState({
                            users: curUsers,
                            allProperties: curAllProperties
                        })

                        // Publish results
                        this.props.pubnub.publish({
                            message: {
                                users: this.state.users,
                                allProperties: this.state.allProperties,
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

                        // Set owner on allProperties
                        const curAllProperties = this.state.allProperties;
                        curAllProperties[msg.message.property].owner = '';

                        this.setState({
                            users: curUsers,
                            allProperties: curAllProperties
                        });
                        this.props.pubnub.publish({
                            message: {successful_seller: msg.publisher, soldToBank: true,users: this.state.users, allProperties: this.state.allProperties, transactionDone: true, broadcast_message: `${curUsers[msg.publisher].name} sold ${allProperties[msg.message.property].property_name} to the bank for $${earning}.`},
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

                        // Set Houses to 0 of property on allProperties
                        const curAllProperties = this.state.allProperties;
                        curAllProperties[msg.message.property].houses = 0;

                        this.setState({
                            users: curUsers,
                            allProperties: curAllProperties
                        });
                        this.props.pubnub.publish({
                            message: {successful_seller: msg.publisher, soldToBank: true,users: this.state.users, allProperties: this.state.allProperties, transactionDone: true, broadcast_message: `${curUsers[msg.publisher].name} sold the houses of ${allProperties[msg.message.property].property_name} to the bank for $${earning}.`},
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
                {this.state.showSellWindow && (!this.state.sellDisabled? <SellWindow strictMode={this.state.strictMode} pubnub={this.props.pubnub} gameChannel={this.props.gameChannel} users={this.state.users} myUUID={this.props.myUUID} onDone={this.onDone} onOffer={this.onOffer}/> : <WaitingForOffer />)}
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

