import React, { Component } from 'react';
import Board from './Board';
import UsersStats from './UsersStats';
import buyWindow from './buyWindow';
import OnlineStatus from './OnlineStatus';
import Swal from "sweetalert2";
import jsx_swal from '@sweetalert/with-react';
import properties from './Data/properties.json';
import SellWindow from './SellWindow';
import WaitingForOffer from './WaitingForOffer';
import Deck from './Deck';
import Chat from './Chat';

import altarDeReyes from './cardImages/altarDeReyes.png';
import appleStore from './cardImages/appleStore.jpg';
import arizonaCorp from './cardImages/arizonaCorp.png'
import bodegaAurrera from './cardImages/bodegaAurrera.jpg';
import casaDeSteve from './cardImages/casaDeSteve.jpg';
import cheetosCorp from './cardImages/cheetosCorp.png';
import cinepolis from './cardImages/cinepolis.jpg';
import citadelOfRicks from './cardImages/citadelOfRicks.png';
import cityWok from './cardImages/cityWok.png';
import demaciaVice from './cardImages/demaciaVice.png';
import forum from './cardImages/forum.png';
import globoDelEquipoRocket from './cardImages/globoDelEquipoRocket.jpg';
import helloKittyCorp from './cardImages/helloKittyCorp.png';
import hotelCalifornia from './cardImages/hotelCalifornia.jpg';
import jardinBotanico from './cardImages/jardinBotanico.png';
import jojoConvention from './cardImages/jojoConvention.jpg';
import JYPEBuilding from './cardImages/JYPEBuilding.png';
import laCasaDeTuCorazon from './cardImages/laCasaDeTuCorazon.jpg';
import lomita from './cardImages/lomita.png';
import montanaZopilote from './cardImages/montanaZopilote.jpg';
import quirinoHouse from './cardImages/quirinoHouse.png';
import zpaticGamingHouse from './cardImages/zpaticGamingHouse.jpg';
import glokmelkerPortal from './cardImages/glokmelkerPortal.jpg';
import niflheimViggoPortal from './cardImages/niflheimViggoPortal.jpg';
import middlenwoodPortal from './cardImages/middlenwoodPortal.jpg';
import dunklerGartenPortal from './cardImages/dunklerGartenPortal.jpg';
import goldMine from './cardImages/goldMine.png';
import cfe from './cardImages/cfe.jpg';

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
            maxTurn: 2,
            turn: 1,
            eventsQueue: [this.startTurnEvent],
            allProperties: allProperties,
            showSellWindow: false,
            strictMode: false,
            sellDisabled: false,
            dicesDisabled: false,
            consecutiveThrows: 0,
            dicesValues: {value1: 1, value2: 2},
            rollIt: false,
            broadcast_messages: []
        }

        console.log('max turn: ', this.state.maxTurn);
        this.movePiece = this.movePiece.bind(this);
    }

    htmlPropertyCard = (property) => {
        if (property.data.type === 'normal'){
            return `
                <div class="propertyCard">
                    <div class="propertyCard-container">
                        <div class="name ${property.data.color_set}">${property.data.property_name}</div>
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
        }
         else if (property.data.type === 'transport') {
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
    gameStart = () => {
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
        // If moving from Jail
        if (curUsers[userUUID].position === 40) {
            curUsers[userUUID].position = 10;
        }

        if (increment === 'jail') {
            
            curUsers[userUUID].position = 40;
            this.setState({
                users: curUsers
            })
        } 
        else {
            curUsers[userUUID].position = (curUsers[userUUID].position + increment) % 40;
            if (curUsers[userUUID].position === 0) {
                if (userUUID === this.props.myUUID){
                    curUsers[userUUID].balance += 200;
                    const usersToUpdate = {};
                    usersToUpdate[userUUID] = {newBalance: curUsers[userUUID].balance}
                    this.props.pubnub.publish({
                        message: {
                            users: usersToUpdate,
                            broadcast_message: `${curUsers[userUUID].name} collected $200 by passing GO.`
                        },
                        channel: this.props.gameChannel
                    });
                }
            }
            this.setState({
                users: curUsers
            })
        }
    }

    componentDidMount (){
        this.setState({
            maxTurn: Object.keys(this.state.users).length
        })
        console.log('mounted boi');

        if (this.props.isRoomCreator) {
            const usersToUpdate = {};
            
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'casaDeSteve'};

            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    updateProperty: {name: 'casaDeSteve', newOwner: this.props.myUUID, newHousesNumber: 3},
                    broadcast_message: `testing.`
                },
                channel: this.props.gameChannel
            });
            this.gameStart();
        }

        if(this.props.gameChannel != null){
            this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {
                // Listen for users
                if(msg.message.users){
                    console.log('mensaje completo ', msg.message);
                    // current Users & allProperties states
                    const curUsers = this.state.users;

                    const users = msg.message.users;
                    // Check what to update for each user.
                    for (let uuid in users){     
                        const {newPropertyName, removePropertyName, newBalance, newJailState} = users[uuid];

                        // Add a new properties.property
                        if(newPropertyName) {
                            curUsers[uuid].properties[newPropertyName] = allProperties[newPropertyName];
                        }
                        
                        // Remove properties.property
                        if (removePropertyName) {
                            delete curUsers[uuid].properties[removePropertyName];
                        }

                        // Update Balance
                        if(newBalance !== undefined) {
                            curUsers[uuid].balance = newBalance;
                        }

                        // Update jailState
                        if (newJailState) curUsers[uuid].inJail = newJailState;
                    }

                    // Update states
                    this.setState({
                        users: curUsers
                    });
                    console.log(this.state.users, this.state.allProperties);
                }

                // Listen for property
                if(msg.message.updateProperty){
                    console.log('entre al loop  de updateProperty');
                    const curAllProperties = this.state.allProperties;

                    const {name, newOwner, newHousesNumber} = msg.message.updateProperty;
                    console.log(msg.message.updateProperty);
                    
                    // Update owner?
                    if (newOwner !== undefined) curAllProperties[name].owner = newOwner;

                    // Update houses number
                    if (newHousesNumber !== undefined) curAllProperties[name].houses = newHousesNumber;

                    this.setState({
                        allProperties: curAllProperties
                    })
                }

                // Listen for broadcast message
                if (msg.message.broadcast_message) {
                    const curBroadcastMessages = this.state.broadcast_messages;
                    curBroadcastMessages.push(msg.message.broadcast_message);
                    this.setState({
                        broadcast_messages: curBroadcastMessages
                    })
                    console.log(msg.message.broadcast_message);
                }
                // Listen for game end
                if (msg.message.gameEnd) {
                    Swal.fire(`${msg.message.winner} HAS WON THE GAME!`, '', 'info');
                }

                // Listen for dices result 
                if (msg.message.dicesResult) {   
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

                    if (msg.message.consecutiveThrows !== 3){
                        const move = (increment) => {
                            this.movePiece(msg.message.dicesThrower, increment);
                        }
                        const landing = async () =>{
                            const curPosition = this.state.users[msg.message.dicesThrower].position;
                            let owner;
                            if (positionsArray[curPosition].property) {
                                owner = this.state.allProperties[positionsArray[curPosition].property.data.camelName].owner;
                            }
                            
                            // Everyone
                            if (positionsArray[curPosition].type === 'normal' || positionsArray[curPosition].type === 'utility'){                     
                                const payRent = async (landerUUID, ownerUUID, propertyName) => {
                                    const lander = this.state.users[landerUUID];
                                    const owner = this.state.users[ownerUUID];

                                    const type = positionsArray[lander.position].property.data.type;

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
                                        rentToPay = owner.properties[propertyName].data.rent[colorSetCount - 1];

                                    } else if (type === "utility" && ownerUUID !== landerUUID) {
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
                                        if (landerUUID === this.props.myUUID)
                                            await Swal.fire(`Pay $${rentToPay}`, '', 'warning');
                                    }

                                    // Get the maximum amount of money from lander first
                                    console.log('balance: ', lander.balance,'rentTopay: ',rentToPay);
                                    if (lander.balance >= rentToPay) {
                                        console.log('balance: ', lander.balance,'rentTopay: ',rentToPay);
                                        lander.balance -= rentToPay;
                                        owner.balance += rentToPay;

                                        const curUsers = this.state.users;
                                        curUsers[landerUUID] = lander;
                                        curUsers[ownerUUID] = owner;
                                        this.setState({
                                            users: curUsers
                                        })
                                        // this.props.pubnub.publish({
                                        //     message: {users: this.state.users},
                                        //     channel: this.props.gameChannel
                                        // });
                                    }   // Wait for lander to pay.
                                    else {
                                        if (landerUUID === this.props.myUUID) {
                                            const my = this.state.users[landerUUID];
                                            // Calculate worth of all owned properties
                                            // let assests = 0;
                                            // for (let property in my.properties) {
                                            //     assests += my.properties[property].data.mortgage_value + this.state.allProperties[property].houses * my.properties[property].house_cost;
                                            // }

                                            // const amountDue = rentToPay - lander.balance;
                                            // if (assests >= amountDue) {
                                            //     this.setState({
                                            //         showSellWindow: true,
                                            //         strictMode: true
                                            //     })
                                            //     console.log('1- set -- -- STRICT MODE');

                                            //     while (this.state.strictMode) {
                                            //         console.log('2- STRICT MODE');
                                            //         if (this.state.users[landerUUID].balance >= rentToPay) {
                                            //             // pay
                                            //             const victim = this.state.users[landerUUID];
                                            //             victim.balance -= rentToPay;
                                            //             owner.balance += rentToPay;
        
                                            //             const curUsers = this.state.users;
                                            //             curUsers[landerUUID] = victim;
                                            //             curUsers[ownerUUID] = owner;
                                            //             this.setState({
                                            //                 users: curUsers,
                                            //                 strictMode: false
                                            //             })
                                            //             this.props.pubnub.publish({
                                            //                 message: {users: this.state.users},
                                            //                 channel: this.props.gameChannel
                                            //             });
                                            //         }
                                            //     }
                                            // } 
                                            // If uncomment above, make the block of code below into the else block of the if block of above.
                                            ////////////////////////////////////////////
                                                // Pay a little & die 
                                                lander.balance -= rentToPay;
                                                lander.bankrupt = true;
                                                owner.balance += lander.balance;

                                                const curUsers = this.state.users;
                                                curUsers[landerUUID] = lander;
                                                curUsers[ownerUUID] = owner;

                                                const curAllProperties = this.state.properties;
                                                for (let property in lander.properties){
                                                    //delete lander.properties[property];
                                                    curAllProperties[property].owner = '';
                                                    curAllProperties[property].houses = 0;
                                                }
                                                this.setState({
                                                    users: curUsers,
                                                    allProperties: curAllProperties
                                                })
                                                // this.props.pubnub.publish({
                                                //     message: {someoneDied: true, users: this.state.users, allProperties: this.state.allProperties, broadcast_message: `${lander.name} is bankrupt.`},
                                                //     channel: this.props.gameChannel
                                                // });
                                            ////////////////////////////////////////////
                                        }
                                    }
                                    this.props.pubnub.publish({
                                        message: {
                                            broadcast_message: `${lander} landed on ${allProperties[propertyName].data.property_name} & has to pay $${rentToPay} to ${owner.name}.`
                                        },
                                        channel: this.props.gameChannel
                                    });
                                }
                                
                                if (owner !== '' && owner !== msg.message.dicesThrower) {
                                    payRent(msg.message.dicesThrower, owner, positionsArray[curPosition].property.data.camelName);
                                }

                            } else if (positionsArray[curPosition].type === 'chest') {
                                await Swal.fire('Testing Chest!', '', 'question');
                            } else if (positionsArray[curPosition].type === 'chance') {
                                await Swal.fire('Testing Chance!', '', 'question');
                            } else if (positionsArray[curPosition].type === 'goToJail') {
                                Swal.fire(`${this.state.users[msg.message.dicesThrower].name} goes to Jail`, '', 'info');
                                move('jail');
                            } else if (positionsArray[curPosition].type === 'GO') {
                                if (this.state.turn === this.props.myTurn){
                                    await Swal.fire('$200 for you!', '', 'success');
                                }
                            } else if (positionsArray[curPosition].type === 'tax') {
                                await Swal.fire('Testing tax!', '', 'warning');
                                // Pay here
                            }

                            // dicesThrower
                            if (msg.message.dicesThrower === this.props.myUUID) {
                                if (positionsArray[curPosition].type === 'normal' || positionsArray[curPosition].type === 'utility') {

                                    const property = positionsArray[curPosition].property;

                                    // If has enough money
                                    if (owner === '' && this.state.users[this.props.myUUID].balance >= property.data.price) {
                                        await Swal.fire({
                                            title: `Would you like to purchase ${property.data.property_name}?`,
                                            html: this.htmlPropertyCard(property),
                                            showDenyButton: true,
                                            showCancelButton: false,
                                            confirmButtonText: `Buy`,
                                            denyButtonText: `No thanks`,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const curUsers = this.state.users;

                                                // Users package
                                                const usersToUpdate = {};
                                                usersToUpdate[this.props.myUUID] = {
                                                    newPropertyName: property.data.camelName, 
                                                    newBalance: curUsers[this.props.myUUID].balance - property.data.price
                                                }
                                                // Property package
                                                const propertyToUpdate = {
                                                    name: property.data.camelName,
                                                    newOwner: this.props.myUUID
                                                }

                                                // Send the packages
                                                this.props.pubnub.publish({
                                                    message: {
                                                        users: usersToUpdate, 
                                                        updateProperty: propertyToUpdate
                                                    },
                                                    channel: this.props.gameChannel
                                                });
                                                Swal.fire(`You have purchased ${property.data.property_name}!`, '', 'success');

                                            } else if (result.isDenied || result.isDismissed) {
                                                Swal.fire(`You chose not to purchase ${property.data.property_name}`, '', 'warning')
                                            }
                                        })
                                    } else if (owner === this.props.myUUID && property.data.type === 'normal') {
                                        // If has enough money
                                        if (this.state.users[this.props.myUUID].balance >= property.data.house_cost && this.state.allProperties[property.data.camelName].houses < 5){
                                            console.log('improve?');
                                            await Swal.fire({
                                                title: `Would you like to improve ${property.data.property_name} for $${property.data.house_cost}?`,
                                                html: `<i class="fa fa-home fa-3x"></i>`,
                                                icon: 'info',
                                                showDenyButton: true,
                                                showCancelButton: false,
                                                confirmButtonText: `Improve`,
                                                denyButtonText: `No thanks`,
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    const curUsers = this.state.users;
                                                    const curAllProperties = this.state.allProperties;

                                                    // Users package
                                                    const usersToUpdate = {};
                                                    usersToUpdate[this.props.myUUID] = {
                                                        newBalance: curUsers[this.props.myUUID].balance - property.data.house_cost
                                                    }
                                                    // Property package
                                                    const propertyToUpdate = {
                                                        name: property.data.camelName,
                                                        newHousesNumber: curAllProperties[property.data.camelName].houses + 1
                                                    }

                                                    // Send the packages
                                                    this.props.pubnub.publish({
                                                        message: {users: usersToUpdate, updateProperty: propertyToUpdate},
                                                        channel: this.props.gameChannel
                                                    });

                                                    Swal.fire(`You purchased 1 house for ${property.data.property_name}!`, '', 'success');
                                                } else if (result.isDenied || result.isDismissed) {
                                                    Swal.fire(`You chose not to improve ${property.data.property_name}`, '', 'warning')
                                                }
                                            })
                                        }
                                    }
                                }
                            }
                            const finishTurn = () => {
                                const goAgain = msg.message.dicesResult.value1 === msg.message.dicesResult.value2;
        
                                if (!msg.message.goAgain){
                                    console.log('inside not go again');
                                    
                                    // Get the available turns
                                    const currentTurns = [];
                                    for(let uuid in this.state.users){
                                        if(!this.state.users[uuid].bankrupt) {
                                            currentTurns.push(this.state.users[uuid].turn)
                                        }
                                    }
                                    // Sort the turns ASC. order
                                    currentTurns.sort((a, b) => a - b);
        
                                    // Get to next available turn
                                    const this_StaticTurn = this.state.users[msg.message.finisher].turn;
                                    const index = currentTurns.indexOf(this_StaticTurn);
                                    const nextIndex = (index + 1) % currentTurns.length;
                                    const nextTurn = currentTurns[nextIndex];
        
                                    this.setState({
                                        turn: nextTurn
                                    })
                                    console.log('NEXT TURN IS: ',this.state.turn);
                                }
        
                                this.props.pubnub.publish({
                                    message: {startTurn: this.state.turn},
                                    channel: this.props.gameChannel
                                });
                            }
                            if (msg.message.dicesThrower === this.props.myUUID)
                                finishTurn();
                        }
                        const moveAnimation = () => {
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
                        moveAnimation();    // Includes effects after landing.

                    } else {
                        // Go to jail
                        this.movePiece(msg.message.dicesThrower,'jail');
                        const finishTurn = () => {
                            this.props.pubnub.publish({
                                message: {finishTurn: true, goAgain: false, finisher: msg.message.dicesThrower},
                                channel: this.props.gameChannel
                            });
                        }
                        if (msg.message.dicesThrower === this.props.myUUID)
                                finishTurn();
                    }
                }

                // Listen for requests
                if (msg.message.request){
                    if (msg.message.request === this.props.myUUID){
                        if(msg.message.transaction.offerType === 'property'){
                            const {property_name, price, propertyName} = msg.message.transaction;
                            Swal.fire({
                                title: `${this.state.users[msg.publisher].name} wants to sell you ${property_name} for $${price}`,
                                html: this.htmlPropertyCard(allProperties[propertyName]),
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonText: `Take Offer`,
                                denyButtonText: `Deny Offer`,
                            }).then((result) => { 
                                if (result.isConfirmed) {
                                    // users package
                                    const usersToUpdate = {};
                                    // Buyer
                                    usersToUpdate[this.props.myUUID] = {
                                        newBalance: this.state.users[this.props.myUUID].balance - price,
                                        newPropertyName: propertyName
                                    }
                                    // Seller
                                    usersToUpdate[msg.publisher] = {
                                        newBalance: this.state.users[msg.publisher].balance + price,
                                        removePropertyName: propertyName
                                    }
                                    // Property package
                                    const updateProperty = {
                                        name: propertyName,
                                        newOwner: this.props.myUUID
                                    }
                                    this.props.pubnub.publish({
                                        message: {users: usersToUpdate, updateProperty: updateProperty, transactionDone: true, transaction: {property_name, price, propertyName, seller: msg.publisher, buyer: this.props.myUUID}},
                                        channel: this.props.gameChannel
                                    })
                                } else if (result.isDenied || result.isDismissed) {
                                    this.props.pubnub.publish({
                                        message: {deniedRequest: true, requester: msg.publisher},
                                        channel: this.props.gameChannel
                                    })
                                    Swal.fire('Offer Denied', '', 'info');
                                }
                            })
                        }
                    }
                }

                // Listen for transactions
                if (msg.message.transactionDone) {
                    if (msg.message.transaction.soldTobank && msg.message.transaction.seller === this.props.myUUID) {
                        const {property_name, houses_sold, soldHousesOnly} = msg.message.transaction;
                        if (soldHousesOnly){
                            Swal.fire(`You sold ${property_name}'s ${houses_sold} houses`, '', 'info');
                        } else {
                            Swal.fire(`You sold ${property_name} ${houses_sold>0? ' along with ' + houses_sold + ' houses' : ''}`, '', 'info');
                        }
                    }

                    else if (msg.message.transaction.buyer === this.props.myUUID) {
                        const {seller, price, property_name, propertyName} = msg.message.transaction;
                        Swal.fire({
                            icon: 'success',
                            title: `You bought ${property_name} from ${this.state.users[seller].name} for $${price}`,
                            html: this.htmlPropertyCard(allProperties[propertyName]),
                            confirmButtonText: `Ok`,
                        })
                    } else if (msg.message.transaction.seller === this.props.myUUID){
                        Swal.fire('Offer Taken!', '', 'success');
                    }
                    this.setState({
                        sellDisabled: false
                    })
                }
                // Listen for unsucessful offers
                if (msg.message.deniedRequest && msg.message.requester === this.props.myUUID) {
                    Swal.fire('Offer Denied!', '', 'error');
                    this.setState({
                        sellDisabled: false
                    })
                }

                // Someone left
                if (msg.message.userUUID) {
                    const curUsers = this.state.users;
                    delete curUsers[msg.message.userUUID];
                    const curAllProperties = this.state.allProperties;
                    for (let property in curAllProperties){
                        if (curAllProperties[property].owner === msg.message.userUUID){
                            curAllProperties[property].owner = '';
                            curAllProperties[property].houses = 0;
                        }
                    }

                    this.setState({
                        users: curUsers,
                        allProperties: curAllProperties
                    })
                }

                // startTurn
                if(msg.message.startTurn) {
                    this.setState({
                        turn: msg.message.startTurn
                    })

                    if (this.state.turn === this.props.myTurn) {
                        Swal.fire(`Your Turn`, '', 'info')
                        this.setState({
                            sellDisabled: false,
                            dicesDisabled: false
                        })
                    } else {
                        this.spectateTurn();
                    }
                }


                // Host
                if (this.props.isRoomCreator){
                    // xd
                    if (msg.message.someoneDied) {
                        let alive = 0;
                        let winner;
                        for(let uuid in this.state.users){
                            if(!this.state.users[uuid].bankrupt) {
                                alive +=1;
                                winner = this.state.users[uuid].name;
                            }
                        }
                        if (alive === 0) {
                            this.props.pubnub.publish({
                                message: {broadcast_message: `${winner} has won the game!`, gameEnd: true, winner: winner},
                                channel: this.props.gameChannel
                            })
                        }
                    }
                }
                
            })
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
            dicesDisabled: true
        });
        const value1 = getRand(5);
        const value2 = getRand(5);
        
        let curConsecutiveThrows = this.state.consecutiveThrows;
        curConsecutiveThrows++;
        if (curConsecutiveThrows === 3) {
            this.setState({
                consecutiveThrows: 0
            })
        } else {
            this.setState({
                consecutiveThrows: curConsecutiveThrows
            })
        }
        
        const util_value1 = getRand(5);
        const util_value2 = getRand(5);
        this.props.pubnub.publish({
            message: {dicesResult: {value1: value1, value2: value2, consecutiveThrows: curConsecutiveThrows}, dicesThrower: msg.publisher, utilityLandingValues: {value1: util_value1, value2: util_value2}},
            channel: this.props.gameChannel
        })
    }

    render() {
        return (
            <div className="game">
                    <div>
                        <button disabled={this.state.sellDisabled || this.state.turn !== this.props.myTurn} className="btn btn-sell" onClick={() => this.setState({
                        showSellWindow: !this.state.showSellWindow
                        })}>Sell</button> 
                        <button disabled={this.state.dicesDisabled || this.state.turn !== this.props.myTurn} className="btn btn-dices" onClick={()=> this.throwDices()}>Throw Dices</button>
                    </div>
                {this.state.showSellWindow && (!this.state.sellDisabled? <SellWindow strictMode={this.state.strictMode} pubnub={this.props.pubnub} gameChannel={this.props.gameChannel} users={this.state.users} myUUID={this.props.myUUID} onDone={this.onDone} onOffer={this.onOffer} allProperties={this.state.allProperties}/> : <WaitingForOffer />)}
                <Deck properties={this.state.users[this.props.myUUID].properties}/>
                <Board dicesValues={this.state.dicesValues} rollIt={this.state.rollIt} allProperties={this.state.allProperties} users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
                <Chat messages={this.state.messages}/>
                <div className="barra"></div>
            </div>
        )
    }
}

export default Game;

