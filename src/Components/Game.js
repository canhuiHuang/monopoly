import React, { Component } from 'react';
import Board from './Board';
import UsersStats from './UsersStats';
import Swal from "sweetalert2";
import properties from './Data/properties.json';
import SellWindow from './SellWindow';
import WaitingForOffer from './WaitingForOffer';
import Deck from './Deck';
import Chat from './Chat';
import VictoryScreen from './VictoryScreen';

import altarDeReyes from './cardImages/altarDeReyes.png';
import appleStore from './cardImages/appleStore.png';
import arizonaCorp from './cardImages/arizonaCorp.png'
import bodegaAurrera from './cardImages/bodegaAurrera.png';
import casaDeSteve from './cardImages/casaDeSteve.png';
import cheetosCorp from './cardImages/cheetosCorp.png';
import cinepolis from './cardImages/cinepolis.png';
import citadelOfRicks from './cardImages/citadelOfRicks.png';
import cityWok from './cardImages/cityWok.png';
import demaciaVice from './cardImages/demaciaVice.png';
import forum from './cardImages/forum.png';
import globoDelEquipoRocket from './cardImages/globoDelEquipoRocket.png';
import helloKittyCorp from './cardImages/helloKittyCorp.png';
import hotelCalifornia from './cardImages/hotelCalifornia.png';
import jardinBotanico from './cardImages/jardinBotanico.png';
import jojoConvention from './cardImages/jojoConvention.png';
import JYPEBuilding from './cardImages/JYPEBuilding.png';
import laCasaDeTuCorazon from './cardImages/laCasaDeTuCorazon.png';
import lomita from './cardImages/lomita.png';
import montanaZopilote from './cardImages/montanaZopilote.png';
import quirinoHouse from './cardImages/quirinoHouse.png';
import zpaticGamingHouse from './cardImages/zpaticGamingHouse.png';
import glokmelkerPortal from './cardImages/glokmelkerPortal.png';
import niflheimViggoPortal from './cardImages/niflheimViggoPortal.png';
import middlenwoodPortal from './cardImages/middlenwoodPortal.png';
import dunklerGartenPortal from './cardImages/dunklerGartenPortal.png';
import goldMine from './cardImages/goldMine.png';
import cfe from './cardImages/cfe.png';

import beautyContest from './chestCards/beautyContest.jpg'
import blackmail from './chestCards/blackmail.jpg'
import chestJailCard from './chestCards/chestJailCard.jpg'
import crown from './chestCards/crown.png'
import go from './chestCards/go.jpg'
import gotojailcard from './chestCards/gotojailcard.png';
import krustyKrabMoney from './chestCards/krustyKrabMoney.jpg';
import lifeInsurance from './chestCards/lifeInsurance.png';
import medicalBill from './chestCards/medicalBill.jpg';
import moneyBag from './chestCards/moneyBag.jpg';
import stonks from './chestCards/stonks.png';
import surgeryBill from './chestCards/surgeryBill.jpg';
import taxReturn from './chestCards/taxReturn.jpg';

import fbi from './chanceCards/fbi.jpg';
import fbi2 from './chanceCards/fbi2.gif';
import friends from './chanceCards/friends.jpg';
import krustyKrabSacudirMoney from './chanceCards/krustyKrabSacudirMoney.gif';
import moonwalk from './chanceCards/moonwalk.gif';
import stewie from './chanceCards/stewie.gif';
import tomDream from './chanceCards/tomDream.gif';
import tommy from './chanceCards/tommy.JPG';
import chanceJailCard from './chanceCards/chanceJailCard.jpg';

// Durstenfeld shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const minOf = (a,b) => {
    if (a <= b){
        return a;
    } else return b;
}

const chestCardsImages = [
    go,
    moneyBag,
    medicalBill,
    gotojailcard,
    crown,
    lifeInsurance,
    blackmail,
    taxReturn,
    surgeryBill,
    stonks,
    moneyBag,
    beautyContest,
    chestJailCard,
    chestJailCard,
    krustyKrabMoney
];  // length: 15
const chanceCardsImages = [
    cfe,
    quirinoHouse,
    middlenwoodPortal,
    fbi,
    fbi2,
    forum,
    friends,
    go,
    chanceJailCard,
    chanceJailCard,
    krustyKrabSacudirMoney,
    tommy,
    moonwalk,
    tomDream,
    stewie
];

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
    {type: 'normal', property: allProperties.appleStore}
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
            allProperties: allProperties,
            showSellWindow: false,
            strictMode: false,
            sellDisabled: false,
            dicesDisabled: false,
            dicesValues: {value1: 1, value2: 2},
            rollIt: false,
            broadcast_messages: [],
            winnerUUID: '',
            chestCardsIndexes: [],
            chestCardsIndex: 0,
            chanceCardsIndexes: [],
            chanceCardsIndex: 0
        }

        console.log('max turn: ', this.state.maxTurn);
        this.movePiece = this.movePiece.bind(this);
    }

    checkForGameOver = () => {
        let alives = 0;
        for (let uuid in this.state.users){
            if (!this.state.users[uuid].bankrupt){
                alives++;
            }
        }
        if (alives < 2){
            for (let uuid in this.state.users){
                if (!this.state.users[uuid].bankrupt){
                    this.setState({
                        winnerUUID: uuid
                    })
                }
                this.props.pubnub.publish({
                    message: {broadcast_message: `${this.state.users[uuid].name} is victorious!`},
                    channel: this.props.gameChannel
                });
            }
        }
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

    renderJailCards = () => {
        const cards = [];
        for(let i = 0; i < this.state.users[this.props.myUUID].jailCards; i++){
            cards.push(
                <img key={i} src={chestJailCard} alt="" />
            )
        }
        return cards;
    }

    // Events
    gameStart = () => {
        this.props.pubnub.publish({
            message: {startTurn: this.state.turn},
            channel: this.props.gameChannel
        });
    }

    setNextTurn = () => {
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
        const this_StaticTurn = this.state.turn;
        const index = currentTurns.indexOf(this_StaticTurn);
        const nextIndex = (index + 1) % currentTurns.length;
        const nextTurn = currentTurns[nextIndex];

        this.setState({
            turn: nextTurn
        })
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
        const usersToUpdate = {};
        // If moving from Jail
        if (curUsers[userUUID].position === 40) {
            curUsers[userUUID].position = 10;
            usersToUpdate[userUUID] = {setPosition: 10}
            this.props.pubnub.publish({
                message: {users: usersToUpdate},
                channel: this.props.gameChannel
            });
        }

        if (increment === 'jail') {
            usersToUpdate[userUUID] = {setPosition: 40, newJailState: true}

        } else if (increment === 'go') {
            usersToUpdate[userUUID] = {setPosition: 0}
        } 
        else {
            curUsers[userUUID].position = (curUsers[userUUID].position + increment) % 40;
            usersToUpdate[userUUID] = {setPosition: curUsers[userUUID].position}
            if (curUsers[userUUID].position === 0) {
                usersToUpdate[userUUID] = {addBalance: 200, setPosition: 0}
                this.props.pubnub.publish({
                    message: {
                        broadcast_message: `${curUsers[userUUID].name} collected $200 by passing GO.`
                    },
                    channel: this.props.gameChannel
                });
            }
        }
        this.setState({
            users: curUsers
        })
        this.props.pubnub.publish({
            message: {users: usersToUpdate},
            channel: this.props.gameChannel
        });
    }

    componentDidMount (){
        this.setState({
            maxTurn: Object.keys(this.state.users).length
        })
        console.log('mounted boi');

        // Set up the random indexes of chest & chance Cards.
        if (this.props.isRoomCreator) {
            const tempChestCardsIndexes = [];
            const tempChanceCardsIndexes = [];
            for (let i = 0; i < 7; i++){
                const setOf15 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                shuffleArray(setOf15);
                setOf15.forEach(n => {
                    tempChestCardsIndexes.push(n);
                })
                shuffleArray(setOf15);
                setOf15.forEach(n => {
                    tempChanceCardsIndexes.push(n);
                })
            }
            this.props.pubnub.publish({
                message: {
                    cardsIndexes: {chest: tempChestCardsIndexes, chance: tempChanceCardsIndexes}
                },
                channel: this.props.gameChannel
            });
            console.log(tempChestCardsIndexes, this.state.chestCardsIndexes);
        }

        if(this.props.gameChannel != null){
            this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {
                // 
                if (this.props.isRoomCreator){
                    if (msg.message.throwDicesRequest){
                        const value1 = getRand(5);
                        const value2 = getRand(5);
                        
                        const util_value1 = getRand(5);
                        const util_value2 = getRand(5);
                        this.props.pubnub.publish({
                            message: {dicesResult: {value1: value1, value2: value2, consecutiveThrows: msg.message.consecutiveThrows}, dicesThrower: msg.publisher, utilityLandingValues: {value1: util_value1, value2: util_value2}},
                            channel: this.props.gameChannel
                        })
                    }
                    // Listen for dices result 
                    if (msg.message.dicesResult) {   

                        if (msg.message.dicesResult.consecutiveThrows < 2){
                            const move = (increment) => {
                                this.movePiece(msg.message.dicesThrower, increment);
                            }
                            const landing = async () =>{
                                const curPosition = this.state.users[msg.message.dicesThrower].position;
                                let owner;
                                if (curPosition !== 40){
                                    if (positionsArray[curPosition].property) {
                                        owner = this.state.allProperties[positionsArray[curPosition].property.data.camelName].owner;
                                    }
                                }
                                
                                // Everyone
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
                                        this.props.pubnub.publish({
                                            message: {dicesAnimation: true, dicesValues: msg.message.utilityLandingValues},
                                            channel: this.props.gameChannel
                                        })

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
                                        this.props.pubnub.publish({
                                            message: {swalAlert: `Pay $${rentToPay}`, icon: 'warning', toMe: msg.message.dicesThrower},
                                            channel: this.props.gameChannel
                                        })
                                    }

                                    // Get the maximum amount of money from lander first
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
                                        const usersToUpdate = {};
                                        usersToUpdate[landerUUID] = {addBalance: -rentToPay};
                                        usersToUpdate[ownerUUID] = {addBalance: rentToPay};
                                        this.props.pubnub.publish({
                                            message: {users: usersToUpdate, swalAlert: `Pay ${rentToPay} to ${owner.name}!`, icon: 'warning', toMe: msg.message.dicesThrower, timer: 1750},
                                            channel: this.props.gameChannel
                                        })
 
                                    }   // Wait for lander to pay.
                                    else {
                                            //const my = this.state.users[landerUUID];
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

                                            // users package
                                            const usersToUpdate = {};
                                            usersToUpdate[landerUUID] = {newBalance: lander.balance - rentToPay}
                                            usersToUpdate[ownerUUID] = {addBalance: lander.balance}

                                            // properties package
                                            const propertiesToUpdate = {};
                                            for (let propertyName in lander.properties){
                                                //delete lander.properties[property];
                                                propertiesToUpdate[propertyName] = {name: propertyName, newOwner: '', newHousesNumber: 0}
                                            }

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate, 
                                                    updateProperties: propertiesToUpdate, 
                                                    swalAlert: `Pay ${rentToPay} to ${owner.name}!`, icon: 'warning', toMe: msg.message.dicesThrower, timer: 1750},
                                                channel: this.props.gameChannel
                                            })
                                            ////////////////////////////////////////////
                                    }
                                    this.props.pubnub.publish({
                                        message: {
                                            broadcast_message: `${lander.name} landed on ${allProperties[propertyName].data.property_name} & has to pay $${rentToPay} to ${owner.name}.`
                                        },
                                        channel: this.props.gameChannel
                                    });
                                }
                                const chestCards = [
                                    {descp: 'Advance to GO (Collect $200)', image: go, execute: ()=>{
                                        setTimeout(()=>{
                                            let i = 0;
                                            var handler = setInterval(() => {
                                                move(1);
                                                i++;
                                                if (i >= 40 - curPosition) {
                                                    clearInterval(handler);
                                                }
                                            }, 145);
                                        },100)
                                    }},
                                    {descp: 'Bank error in your favor. Collect $200', image: moneyBag, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 200;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Doctor's fee. Pay $50", image: medicalBill, execute: ()=>{
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            const usersToUpdate = {};
                                            usersToUpdate[msg.message.dicesThrower] = {addBalance: -50}

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate},
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }},
                                    {descp: "Go to Jail. Do not pass GO. Do not collect $200", image: gotojailcard, execute: ()=>{
                                        move('jail');
                                    }},
                                    {descp: "It's your daugther's quinceañera. Collect $50 from every player.", image: crown, execute: ()=>{
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            const usersToUpdate = {};
                                            let cooperacha = 0;
                                            for (let uuid in this.state.users){
                                                if (!this.state.users[uuid].bankrupt && uuid !== msg.message.dicesThrower){
                                                    usersToUpdate[uuid] = {addBalance: -50}
                                                    cooperacha +=50;
                                                }
                                            }
                                            usersToUpdate[msg.message.dicesThrower] = {addBalance: cooperacha}

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate},
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }},
                                    {descp: "Life Insurance matures. Collect $100", image: lifeInsurance, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 100;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "You got blackmailed into investing on Education. Pay $150", image: blackmail, execute: ()=>{
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            const usersToUpdate = {};
                                            usersToUpdate[msg.message.dicesThrower] = {addBalance: -150}

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate},
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }},
                                    {descp: "Income Tax refund. Collect $20", image: taxReturn, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 20;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Pay surgery's fee. $100", image: surgeryBill, execute: ()=>{
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            const usersToUpdate = {};
                                            usersToUpdate[msg.message.dicesThrower] = {addBalance: -100}

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate},
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }},
                                    {descp: "You played well with stocks. Collect $45", image: stonks, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 45;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "You inherit $100", image: moneyBag, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 100;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "You have won 19th place in a Beauty Contest. Collect $10", image: beautyContest, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 10;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Get out of Jail. FREE", image: chestJailCard, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].jailCards++;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Get out of Jail. FREE", image: chestJailCard, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].jailCards++;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "You found $100", image: krustyKrabMoney, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 100;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                ];  // length: 15
                                const chanceCards = [
                                    {descp: 'Advance to the nearest utility property', image: cfe, execute: ()=>{
                                        const nearestUtilityIndex = minOf(Math.abs(12-curPosition),Math.abs(curPosition-12)) < minOf(Math.abs(28-curPosition),Math.abs(curPosition-28))? 12 : 28;

                                        setTimeout(()=>{
                                            var handler = setInterval(() => {
                                                move(1);
                                                if (this.state.users[msg.message.dicesThrower].position === nearestUtilityIndex) {
                                                    clearInterval(handler);
                                                    setTimeout(()=>{landing()}, 100)
                                                }
                                            }, 115);
                                        },100)
                                    }},
                                    {descp: "Advance to Quirino's House", image: quirinoHouse, execute: ()=>{
                                        setTimeout(()=>{
                                            var handler = setInterval(() => {
                                                move(1);
                                                if (this.state.users[msg.message.dicesThrower].position === 11) {
                                                    clearInterval(handler);
                                                    setTimeout(()=>{landing()}, 100)
                                                }
                                            }, 115);
                                        },100)
                                    }},
                                    {descp: "Advance to Middlenwood Portal", image: middlenwoodPortal, execute: ()=>{
                                        setTimeout(()=>{
                                            var handler = setInterval(() => {
                                                move(1);
                                                if (this.state.users[msg.message.dicesThrower].position === 25) {
                                                    clearInterval(handler);
                                                    setTimeout(()=>{landing()}, 100)
                                                }
                                            }, 115);
                                        },100)
                                    }},
                                    {descp: "Go to Jail. Do not pass GO. Do not collect $200", image: fbi, execute: ()=>{
                                        move('jail');
                                    }},
                                    {descp: "Go to Jail. Do not pass GO. Do not collect $200", image: fbi2, execute: ()=>{
                                        move('jail');
                                    }},
                                    {descp: "Your Crush invited you to Forum", image: forum, execute: ()=>{
                                        setTimeout(()=>{
                                            var handler = setInterval(() => {
                                                move(1);
                                                if (this.state.users[msg.message.dicesThrower].position === 19) {
                                                    clearInterval(handler);
                                                    setTimeout(()=>{landing()}, 100)
                                                }
                                            }, 115);
                                        },100)
                                    }},
                                    {descp: "You're in good mood & happily give everyone $50", image: friends, execute: ()=>{
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            const curUsers = this.state.users;
                                            const usersToUpdate = {};
                                            let generosidad = 0;
                                            for(let uuid in curUsers){
                                                if (!curUsers[uuid].bankrupt && uuid !== this.props.myUUID){
                                                    usersToUpdate[uuid] = {addBalance: 50};
                                                    generosidad -= generosidad;
                                                }
                                            }
                                            usersToUpdate[msg.message.dicesThrower] = {addBalance: generosidad}

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate},
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }},
                                    {descp: 'Advance to GO (Collect $200)', image: go, execute: ()=>{
                                        setTimeout(()=>{
                                            let i = 0;
                                            var handler = setInterval(() => {
                                                move(1);
                                                i++;
                                                if (i >= 40 - curPosition) {
                                                    clearInterval(handler);
                                                }
                                            }, 145);
                                        },100)
                                    }},
                                    {descp: "Get out of Jail. FREE", image: chanceJailCard, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].jailCards++;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Get out of Jail. FREE", image: chanceJailCard, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].jailCards++;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Bank pays you dividend of $50", image: krustyKrabSacudirMoney, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 50;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Your wallet flew away. Fortunately, you are poor. You lost $15", image: tommy, execute: ()=>{
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            const usersToUpdate = {};
                                            usersToUpdate[msg.message.dicesThrower] = {addBalance: -50}

                                            this.props.pubnub.publish({
                                                message: {users: usersToUpdate},
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }},
                                    {descp: "Go back 3 spaces", image: moonwalk, execute: ()=>{
                                        setTimeout(()=>{
                                            let i = 0;
                                            var handler = setInterval(() => {
                                                move(-1);
                                                i++
                                                if (i > 3) {
                                                    clearInterval(handler);
                                                    setTimeout(()=>{landing()}, 100)
                                                }
                                            }, 115);
                                        },100)
                                    }},
                                    {descp: "Your dream comes true! Collect $150", image: tomDream, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 150;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                    {descp: "Your friend finally paid you back. Collect $250", image: stewie, execute: ()=>{
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].balance += 250;
                                        this.setState({
                                            users: curUsers
                                        })
                                    }},
                                ];
                                
                                if (positionsArray[curPosition].type === 'normal' || positionsArray[curPosition].type === 'utility'){                     
                                    if (owner !== '' && owner !== msg.message.dicesThrower) {
                                        payRent(msg.message.dicesThrower, owner, positionsArray[curPosition].property.data.camelName);
                                    }
                                } else if (positionsArray[curPosition].type === 'chest') {
                                    this.props.pubnub.publish({
                                        message: {broadcast_message: `${this.state.users[msg.message.dicesThrower].name} got a Community Chest card: "${chestCards[this.state.chestCardsIndexes[this.state.chestCardsIndex]].descp}"`,
                                        chestAlert: true, 
                                        h3: `${this.state.users[msg.message.dicesThrower].name} picked a chance Card`,
                                        p: chestCards[this.state.chestCardsIndexes[this.state.chestCardsIndex]].descp,
                                        imageIndex: this.state.chestCardsIndexes[this.state.chestCardsIndex]
                                    },
                                        channel: this.props.gameChannel
                                    })
                                    
                                    await chestCards[this.state.chestCardsIndexes[this.state.chestCardsIndex]].execute();

                                    let curIndex = this.state.chestCardsIndex;
                                    curIndex = (curIndex + 1) % 105;
                                    setTimeout(()=>{
                                        this.setState({
                                            chestCardsIndex: curIndex
                                        })
                                    },1500)

                                } else if (positionsArray[curPosition].type === 'chance') {
                                    this.props.pubnub.publish({
                                        message: {broadcast_message: `${this.state.users[msg.message.dicesThrower].name} got a Chance card: "${chanceCards[this.state.chanceCardsIndexes[this.state.chanceCardsIndex]].descp}"`,
                                        chanceAlert: true, 
                                        h3: `${this.state.users[msg.message.dicesThrower].name} picked a chance Card`,
                                        p: chanceCards[this.state.chanceCardsIndexes[this.state.chanceCardsIndex]].descp,
                                        imageIndex: this.state.chanceCardsIndexes[this.state.chanceCardsIndex]
                                    },
                                        channel: this.props.gameChannel
                                    })
                                    await chanceCards[this.state.chanceCardsIndexes[this.state.chanceCardsIndex]].execute();

                                    let curIndex = this.state.chanceCardsIndex;
                                    curIndex = (curIndex + 1) % 105;
                                    setTimeout(()=>{
                                        this.setState({
                                            chanceCardsIndex: curIndex
                                        })
                                    },1500)

                                } else if (positionsArray[curPosition].type === 'goToJail') {
                                    this.props.pubnub.publish({
                                        message: { swalAlert: `${this.state.users[msg.message.dicesThrower].name} goes to Jail`, icon: 'info', timer: 2350

                                        },
                                        channel: this.props.gameChannel
                                    })
                                    move('jail');
                                } else if (positionsArray[curPosition].type === 'GO') {
                                    this.props.pubnub.publish({
                                        message: { swalAlert: `Collect $200.`, icon: 'success', timer: 2350

                                        },
                                        channel: this.props.gameChannel
                                    })
                                } else if (positionsArray[curPosition].type === 'tax') {
                                    const tax_pos4 = (user) => {
                                        return user.balance * 0.1 >200? 200 : Math.round(user.balance * 0.1);
                                    }
                                    const taxAmount = curPosition === 4? tax_pos4(this.state.users[msg.message.dicesThrower]) : 75;
                                    // users package
                                    const usersToUpdate = {};
                                    usersToUpdate[this.props.myUUID] = {addBalance: -taxAmount}

                                    this.props.pubnub.publish({
                                        message: {
                                            users: usersToUpdate, 
                                            swalAlert: `Pay $${taxAmount} of tax.`, icon: 'warning', timer: 4500,
                                            broadcast_message: `${this.state.users[this.props.myUUID].name} pays $${taxAmount} of tax.`},
                                        channel: this.props.gameChannel
                                    })
                                }
                                
                                // dicesThrower
                                    if (positionsArray[curPosition].type === 'normal' || positionsArray[curPosition].type === 'utility') {
                                        // Ask if user wants to buy property
                                        this.props.pubnub.publish({
                                            message: {
                                                landing: true,
                                                lander: msg.message.dicesThrower,
                                                curPosition: curPosition,
                                            },
                                            channel: this.props.gameChannel
                                        });

                                        if (msg.message.landing){
                                            const {lander, curPosition} = msg.message;

                                            const property = positionsArray[curPosition].property;

                                            // If has enough money
                                            if (property.owner === '' && this.state.users[this.props.myUUID].balance >= property.data.price) {
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
                                                                updateProperty: propertyToUpdate,
                                                                broadcast_message: `${curUsers[this.props.myUUID].name} bought ${property.data.property_name}.`
                                                            },
                                                            channel: this.props.gameChannel
                                                        });
                                                        Swal.fire({
                                                            icon: 'success',
                                                            title: `You have purchased ${property.data.property_name}!`,
                                                            timer: 2350
                                                        })
                                                    } else if (result.isDenied || result.isDismissed) {
                                                        Swal.fire({
                                                            icon: 'warning',
                                                            title: `You chose not to purchase ${property.data.property_name}`,
                                                            timer: 2350
                                                        })
                                                    }
                                                })
                                            } else if (property.owner === this.props.myUUID && property.data.type === 'normal') {
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
                                                                message: {users: usersToUpdate, updateProperty: propertyToUpdate,
                                                                    broadcast_message: `${curUsers[this.props.myUUID].name} bought a house for ${property.data.property_name}.`},
                                                                channel: this.props.gameChannel
                                                            });
                                                            Swal.fire({
                                                                icon: 'success',
                                                                title: `You purchased 1 house for ${property.data.property_name}!`,
                                                                timer: 2350
                                                            })
                                                            
                                                        } else if (result.isDenied || result.isDismissed) {
                                                            Swal.fire({
                                                                icon: 'warning',
                                                                title: `You chose not to improve ${property.data.property_name}`,
                                                                timer: 2350
                                                            })
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                    }
                            }
                            const moveAnimation = () => {
                                //If Jail & third turn in Jail
                                if (this.state.users[msg.message.dicesThrower].inJail && this.state.users[msg.message.dicesThrower].turnsInJail > 1){
                                    const curUsers = this.state.users;
                                    curUsers[msg.message.dicesThrower].inJail = false;
                                    curUsers[msg.message.dicesThrower].turnsInJail = 0;
                                    this.setState({
                                        users: curUsers
                                    })
                                    
                                    const usersToUpdate = {};
                                    usersToUpdate[msg.message.dicesThrower] = {newJailState: false, turnsInJail: 0};
                                    this.props.pubnub.publish({
                                        message: {users:usersToUpdate, broadcast_message: `${curUsers[msg.message.dicesThrower].name} left Jail.`},
                                        channel: this.props.gameChannel
                                    })

                                } else if (this.state.users[msg.message.dicesThrower].inJail && this.state.users[msg.message.dicesThrower].jailCards > 0){
                                    const curUsers = this.state.users;
                                    curUsers[msg.message.dicesThrower].inJail = false;
                                    curUsers[msg.message.dicesThrower].turnsInJail = 0;
                                    curUsers[msg.message.dicesThrower].jailCards--;
                                    this.setState({
                                        users: curUsers
                                    })

                                    const usersToUpdate = {};
                                    usersToUpdate[msg.message.dicesThrower] = {newJailState: false, turnsInJail: 0, addJailCards: -1};
                                    this.props.pubnub.publish({
                                        message: {users:usersToUpdate, broadcast_message: `${curUsers[msg.message.dicesThrower].name} left Jail with "Get out of Jail Free" Card.`},
                                        channel: this.props.gameChannel
                                    })
                                }
                                if (!this.state.users[msg.message.dicesThrower].inJail || (this.state.users[msg.message.dicesThrower].inJail && msg.message.dicesResult.value1 === msg.message.dicesResult.value2)){
                                    const randInterval = Math.round((Math.random() * 101) + 200);
                                    setTimeout(()=>{
                                        let i = 0;
                                        var handler = setInterval(() => {
                                            move(1);
                                            i++;
                                            if (i >= msg.message.dicesResult.value1 + msg.message.dicesResult.value2) {
                                                clearInterval(handler);
                                                setTimeout(()=> {
                                                    landing();
                                                    const goAgain = msg.message.dicesResult.value1 === msg.message.dicesResult.value2;
                                                    let setconsecutiveThrows;
                            
                                                    if (!goAgain){
                                                        this.setNextTurn();
                                                        setconsecutiveThrows = 0;
                                                    } else {
                                                        setconsecutiveThrows = this.state.consecutiveThrows + 1;
                                                    }
                                                    const usersToUpdate = {};
                                                    usersToUpdate[msg.message.dicesThrower] = {consecutiveThrows: setconsecutiveThrows}
                                                    this.props.pubnub.publish({
                                                        message: {startTurn: this.state.turn, users: usersToUpdate},
                                                        channel: this.props.gameChannel
                                                    });
                                                }, 220)
                                            }
                                        }, randInterval);
                                    }, 2850)
                                    // Leave Jail if dices result is a double.
                                    if (this.state.users[msg.message.dicesThrower].inJail && msg.message.dicesResult.value1 === msg.message.dicesResult.value2){
                                        const curUsers = this.state.users;
                                        curUsers[msg.message.dicesThrower].inJail = false;
                                        curUsers[msg.message.dicesThrower].turnsInJail = 0;
                                        this.setState({
                                            users: curUsers
                                        })
                                        if (msg.message.dicesThrower === this.props.myUUID){
                                            Swal.fire('You are free now', '', 'info');
                                            this.props.pubnub.publish({
                                                message: {broadcast_message: `${curUsers[msg.message.dicesThrower].name} left Jail.`
                                                },
                                                channel: this.props.gameChannel
                                            })
                                        }
                                    }
                                } else if (this.state.users[msg.message.dicesThrower].inJail){
                                    const curUsers = this.state.users;
                                    curUsers[msg.message.dicesThrower].turnsInJail++;
                                    this.setState({
                                        users: curUsers
                                    })
                                    if (msg.message.dicesThrower === this.props.myUUID){
                                        this.setNextTurn();
                                        this.props.pubnub.publish({
                                            message: {startTurn: this.state.turn},
                                            channel: this.props.gameChannel
                                        });
                                    }
                                    setTimeout(()=>{
                                        Swal.fire({
                                            icon: 'info',
                                            title: `You are going to stay here a little bit longer.`,
                                            timer: 2350
                                        });
                                    },1500)
                                }
                            }
                            
                            // dices animation
                            this.props.pubnub.publish({
                                message: {dicesAnimation: true, dicesValues: msg.message.dicesResult},
                                channel: this.props.gameChannel
                            })
                            moveAnimation();    // Includes effects after landing.

                        } else {
                            // Go to jail
                            this.movePiece(msg.message.dicesThrower,'jail');

                            if (msg.message.dicesThrower === this.props.myUUID){
                                Swal.fire('Calm down, go to Jail', '', 'warning');
                                this.setNextTurn();
                                this.setState({
                                    consecutiveThrows: 0
                                })
                                this.props.pubnub.publish({
                                    message: {startTurn: this.state.turn},
                                    channel: this.props.gameChannel
                                });
                            }
                        }
                    }
                }

                // Listen for to me
                if (msg.message.toMe === this.props.myUUID){
                    const {swalAlert, icon, timer} = msg.message;
                    if(timer !== undefined){
                        Swal.fire({
                            icon: icon,
                            title: swalAlert,
                            timer: timer
                        });
                    } else {
                        Swal.fire({
                            icon: icon,
                            title: swalAlert,
                        });
                    }
                }

                // chest & chance alert
                if (msg.message.chestAlert){
                    const {h3, p, imageIndex} = msg.message;
                    Swal.fire({
                        html: `
                            <h3>${h3} picked a chance Card</h3>
                            <div class="card-container">
                                <p class="card-description">${p}</p>
                                <img src=${chestCardsImages[imageIndex]} alt=""/>
                            </div>`,
                        timer: 5550
                    })
                } 
                else if (msg.message.chanceAlert){
                    const {h3, p, imageIndex} = msg.message;
                    Swal.fire({
                        html: `
                            <h3>${h3} picked a chance Card</h3>
                            <div class="card-container">
                                <p class="card-description">${p}</p>
                                <img src=${chanceCardsImages[imageIndex]} alt=""/>
                            </div>`,
                        timer: 5550
                    })
                }

                // Listen for dices animation
                if (msg.message.dicesAnimation){
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
                    updateDices(msg.message.dicesValues);
                }

                // Listen for users
                if(msg.message.users){
                    // current Users & allProperties states
                    const curUsers = this.state.users;

                    const users = msg.message.users;
                    let deadUsers = [], someoneDied = false;
                    // Check what to update for each user.
                    for (let uuid in users){     
                        const {newPropertyName, removePropertyName, newBalance, newJailState, addBalance, setPosition, turnsInJail, addJailCards, consecutiveThrows} = users[uuid];

                        // Update position
                        if (setPosition){
                            curUsers[uuid].position = setPosition;
                        }

                        // Add a new properties.property
                        if(newPropertyName) curUsers[uuid].properties[newPropertyName] = allProperties[newPropertyName];
                        console.log('allProperties[newPropertyName] --> ', allProperties[newPropertyName]);
                        
                        // Remove properties.property
                        if (removePropertyName) delete curUsers[uuid].properties[removePropertyName];

                        // Update Balance
                        if(newBalance !== undefined) {
                            curUsers[uuid].balance = newBalance;
                            if (newBalance < 0){
                                deadUsers.push(uuid);
                                someoneDied = true;
                            }
                        }
                        // Add Balance
                        if (addBalance !== undefined) {
                            curUsers[uuid].balance += addBalance;
                        }

                        // Update jailState
                        if (newJailState) {
                            curUsers[uuid].inJail = newJailState;
                            if (uuid === this.props.myUUID){
                                Swal.fire('You are free now', '', 'info');
                            }
                        }

                        // Update turnsInJail
                        if (turnsInJail) curUsers[uuid].turnsInJail = turnsInJail;

                        // Update jailcards
                        if (addJailCards) curUsers[uuid].jailCards += addJailCards;

                        // consecutiveThrpws
                        if(consecutiveThrows) curUsers[uuid].consecutiveThrows = consecutiveThrows;
                    }

                    // Update states
                    this.setState({
                        users: curUsers
                    });
                    if (someoneDied){
                        setTimeout(()=>{
                            deadUsers.forEach(uuid => {
                                curUsers[uuid].bankrupt = true;
                                for(let firstAlive in curUsers){
                                    if (!curUsers[firstAlive].bankrupt && this.props.myUUID === firstAlive){
                                        this.props.pubnub.publish({
                                            message: {broadcast_message: `${curUsers[uuid].name} is on bankrupt.`},
                                            channel: this.props.gameChannel
                                        });
                                        break;
                                    }
                                }
                            })
                            this.setState({
                                users: curUsers
                            });
                            this.checkForGameOver();
                        },1250) 
                    }
                    console.log(this.state.users, this.state.allProperties);
                }

                // Listen for property
                if(msg.message.updateProperty || msg.message.updateProperties){
                    const curAllProperties = this.state.allProperties;
                    const updateProperty = (propertyObject) =>{
                        console.log('entre al loop  de updateProperty');
                        
                        const {name, newOwner, newHousesNumber} = propertyObject;
                        console.log(propertyObject);
                        
                        // Update owner?
                        if (newOwner !== undefined) curAllProperties[name].owner = newOwner;

                        // Update houses number
                        if (newHousesNumber !== undefined) curAllProperties[name].houses = newHousesNumber;
                    }
                    if (msg.message.updateProperty){
                        updateProperty(msg.message.updateProperty);
                    } else if (msg.message.updateProperties){
                        for (let propertyObject in msg.message.updateProperties){
                            updateProperty(msg.message.updateProperties[propertyObject]);
                        }
                    }
                    
                    this.setState({
                        allProperties: curAllProperties
                    })
                    console.log(this.state.users);
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
                            this.props.pubnub.publish({
                                message: {broadcast_message: `${this.state.users[this.props.myUUID].name} sold ${property_name}'s ${houses_sold} houses`},
                                channel: this.props.gameChannel
                            })
                        } else {
                            Swal.fire(`You sold ${property_name} ${houses_sold>0? ' along with ' + houses_sold + ' houses' : ''}`, '', 'info');
                            this.props.pubnub.publish({
                                message: {broadcast_message: `${this.state.users[this.props.myUUID].name} sold ${property_name} ${houses_sold>0? ' along with ' + houses_sold + ' houses' : ''}`},
                                channel: this.props.gameChannel
                            })
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
                        this.props.pubnub.publish({
                            message: {broadcast_message: `${this.state.users[this.props.myUUID].name} bought ${property_name} from ${this.state.users[seller].name} for $${price}`},
                            channel: this.props.gameChannel
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
                    this.props.pubnub.publish({
                        message: {broadcast_message: `${this.state.users[msg.message.userUUID].name} left the game.`},
                        channel: this.props.gameChannel
                    })
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
                    setTimeout(()=>{
                        this.checkForGameOver();
                    },1250)
                    
                }

                // startTurn
                if(msg.message.startTurn) {
                    this.setState({
                        turn: msg.message.startTurn
                    })

                    if (this.state.turn === this.props.myTurn) {
                        Swal.fire({
                            icon: 'info',
                            title: `Your turn`,
                            timer: 2350
                        })
                        this.setState({
                            sellDisabled: false,
                            dicesDisabled: false
                        })
                    } else {
                        this.spectateTurn();
                    }
                }

                // Listen for card Indexes
                if (msg.message.cardsIndexes){
                    this.setState({
                        chestCardsIndexes: msg.message.cardsIndexes.chest,
                        chanceCardsIndexes: msg.message.cardsIndexes.chance
                    })
                    console.log('received boi: ', this.state.chestCardsIndexes, this.state.chanceCardsIndexes);
                    if (this.props.isRoomCreator){
                        this.gameStart();
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
        
        this.props.pubnub.publish({
            message: {throwDicesRequest: true, consecutiveThrows: this.state.users[this.props.myUUID].consecutiveThrows},
            channel: this.props.gameChannel
        })
    }
    
    render() {
        return (
            <div className="game">
                {this.state.winnerUUID && <VictoryScreen users={this.state.users} winnerUUID={this.state.winnerUUID}/>}
                <div>
                    <button disabled={this.state.sellDisabled || this.state.turn !== this.props.myTurn} className="btn btn-sell" onClick={() => this.setState({
                    showSellWindow: !this.state.showSellWindow
                    })}>Sell</button> 
                    <button disabled={this.state.dicesDisabled || this.state.turn !== this.props.myTurn} className="btn btn-dices" onClick={()=> this.throwDices()}>Throw Dices</button>
                </div>
                {this.state.showSellWindow && (!this.state.sellDisabled? <SellWindow strictMode={this.state.strictMode} pubnub={this.props.pubnub} gameChannel={this.props.gameChannel} users={this.state.users} myUUID={this.props.myUUID} onDone={this.onDone} onOffer={this.onOffer} allProperties={this.state.allProperties}/> : <WaitingForOffer />)}
                <Deck properties={this.state.users[this.props.myUUID].properties}/>
                <div className="jailCards">
                    {this.renderJailCards()}
                </div>
                <Board dicesValues={this.state.dicesValues} rollIt={this.state.rollIt} allProperties={this.state.allProperties} users={this.state.users} />
                <UsersStats users={this.state.users} turn={this.state.turn}/>
                <Chat messages={this.state.broadcast_messages}/>
                <div className="barra"></div>
            </div>
        )
    }
}

export default Game;

