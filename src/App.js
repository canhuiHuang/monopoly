import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
import PiecePicker from './Components/PiecePicker';
import Swal from "sweetalert2";  
import shortid  from 'shortid';
import './css/main.css';
import Footer from './Components/Footer';

import cool from './emojis/cool.png'; 
import cute from './emojis/cute.png'; 
import embarrassed from './emojis/embarrassed.png'; 
import ghost from './emojis/ghost.png'; 
import greed from './emojis/greed.png'; 
import happy1 from './emojis/happy1.png'; 
import happy2 from './emojis/happy2.png'; 
import laughing1 from './emojis/laughing1.png'; 
import laughing2 from './emojis/laughing2.png'; 
import smart from './emojis/smart.png';

const emojiFaces = [];
for(let i = 0; i < 8; i++){emojiFaces.push(cool)};
for(let i = 0; i < 5; i++){emojiFaces.push(cute)};
for(let i = 0; i < 7; i++){emojiFaces.push(embarrassed)};
for(let i = 0; i < 1; i++){emojiFaces.push(ghost)};
for(let i = 0; i < 2; i++){emojiFaces.push(greed)};
for(let i = 0; i < 20; i++){emojiFaces.push(happy1)};
for(let i = 0; i < 20; i++){emojiFaces.push(happy2)};
for(let i = 0; i < 7; i++){emojiFaces.push(laughing1)};
for(let i = 0; i < 7; i++){emojiFaces.push(laughing2)};
for(let i = 0; i < 12; i++){emojiFaces.push(smart)};

class App extends Component {
  constructor(props) {  
    super(props);
    const generatedUUID = 'uuid-' + shortid.generate() + shortid.generate();
    this.pubnub = new PubNubReact({
      publishKey: process.env.REACT_APP_PUBLISH_KEY, 
      subscribeKey: process.env.REACT_APP_SUBSCRIBE_KEY,
      uuid: generatedUUID
    });
    
    this.state = {
      piece: '',
      isPlaying: false,
      isRoomCreator: false,
      isDisabled: false,
      myTurn: false,
      users: {[generatedUUID]: {name: 'uwu', piece_id: -1}},
      name: 'uwu',
      uuid: generatedUUID,
      randomNumbers: []
    };

    this.lobbyChannel = null;
    this.pieceSelectionChannel = null;
    this.gameChannel = null;
    this.roomId = null;    
    this.pubnub.init(this);
  }
  
  componentDidMount(){
    const inPresence = (event)=> {
      // Set all users for the AUTHOR
      if (this.state.isRoomCreator){
        if (event.action === 'join') {
          const curUsers = this.state.users;
          if (!curUsers.hasOwnProperty(event.uuid)){
            curUsers[event.uuid] = {name: 'goku', piece_id: ''};
            this.setState({
              users: curUsers
            })
  
            // Publish the users
            this.pubnub.publish({
              message: {
                users: this.state.users
              },
              channel: this.lobbyChannel
            });
          }
        } else if (event.action === 'leave') {
          // Remove user for the AUTHOR
          const curUsers = this.state.users;
          delete curUsers[event.uuid];
          this.setState({
            users: curUsers
          })
          // Publish the users
          this.pubnub.publish({
            message: {
              users: this.state.users
            },
            channel: this.lobbyChannel
          });
        }
      }
      if (event.action === 'leave'){
        // Publish to Game
        if (event.channel.startsWith('monopolygame--')) {
          this.pubnub.publish({
            message: {
              userUUID: event.uuid
            },
            channel: event.channel
          });
        }
      }
      
      console.log('presence listener: ',event);
    }

    this.pubnub.addListener({
      presence: function(event) {
        inPresence(event);
      }
    })
  }
  
  componentWillUnmount() {
    this.pubnub.unsubscribe({
      channels : [this.lobbyChannel]
    });
  }
  
  componentDidUpdate() {
    // Check that the player is connected to a channel
    if(this.lobbyChannel != null){
      this.pubnub.getMessage(this.lobbyChannel, (msg) => {

        // Received users info
            if (msg.message.randomNumbers){
              this.setState({
                randomNumbers: msg.message.randomNumbers
              })
            }

            if (msg.message.users) {
              console.log('received: ', msg.message.users);
              const users = msg.message.users;
              
              // If name hasn't set yet, send name to host.
              if (users[this.state.uuid].name !== this.state.name)
              {
                users[this.state.uuid].name = this.state.name;
                this.pubnub.publish({
                  message: {
                    namePhase: this.state.name
                  }, 
                  channel: this.lobbyChannel
                })
              }
              this.setState({
                users: msg.message.users
              })

              console.log(this.state.users);
            }

            // Listen for names (RoomCreator)
            if (msg.message.namePhase && this.state.isRoomCreator) {
                const curUsers = this.state.users;
                console.log('soy host y recibi ', msg);
                if (curUsers[msg.publisher]) {
                  curUsers[msg.publisher].name = msg.message.namePhase;
                  this.setState({
                    users: curUsers
                  });

                  // Send users back to all subscribers
                  this.pubnub.publish({
                    message: {
                      users: this.state.users,
                      randomNumbers: this.state.randomNumbers
                    },
                    channel: this.lobbyChannel
                  });
                }
            }

            // Listen for gameStart
            if (msg.message.gameStart && msg.message.pieceSelectionChannel){

              this.pieceSelectionChannel = msg.message.pieceSelectionChannel;

              this.pubnub.subscribe({
                channels: [this.pieceSelectionChannel],
                withPresence: true
              });

              this.setState({
                isPlaying: true
              });
            }
            
          // Close the modals if they are opened
          Swal.close();
        }
      ); 
    }
  }

  // Create a room channel
  onPressCreate = (e) => {
    // random numbers for emojis
    const curRandomNumbers = [];
    for (let i = 0; i < 20; i++){
      curRandomNumbers.push(Math.round(Math.random() * 89))
    }
    this.setState({
      randomNumbers: curRandomNumbers
    });

    // Create a random name for the channel
    this.roomId = shortid.generate().substring(0,5).toUpperCase();
    this.lobbyChannel = 'monopolylobby--' + this.roomId;

    this.pubnub.subscribe({
      channels: [this.lobbyChannel],
      withPresence: true
    });

  // Open the modal
  Swal.fire({
    position: 'top',
    allowOutsideClick: false,
    title: 'Share this room ID with your friend',
    text: this.roomId,
    width: 275,
    padding: '0.7em',
    // Custom CSS
    customClass: {
        heightAuto: false,
        title: 'title-class',
        popup: 'popup-class',
        confirmButton: 'button-class'
    }
  })

    this.setState({
      piece: 'X',
      isRoomCreator: true,
      isDisabled: true, // Disable the 'Create' button
      myTurn: true, // Room creator makes the 1st move
    });   
  }
  
  // The 'Join' button was pressed
  onPressJoin = (e) => {
    Swal.fire({
      position: 'top',
      input: 'text',
      allowOutsideClick: false,
      inputPlaceholder: 'Enter the room id',
      showCancelButton: true,
      confirmButtonColor: 'rgb(208,33,41)',
      confirmButtonText: 'OK',
      width: 275,
      padding: '0.7em',
      customClass: {
        heightAuto: false,
        popup: 'popup-class',
        confirmButton: 'join-button-class ',
        cancelButton: 'join-button-class'
      } 
    }).then((result) => {
      // Check if the user typed a value in the input field
      if(result.value){
        this.joinRoom(result.value);
      }
    })
  }
  // Join a room channel
  joinRoom = (value) => {
    this.roomId = value.toUpperCase();
    this.lobbyChannel = 'monopolylobby--' + this.roomId;

    // Check the number of people in the channel
    this.pubnub.hereNow({
      channels: [this.lobbyChannel], 
    }).then((response) => { 
        if(response.totalOccupancy < 12){
          this.pubnub.subscribe({
            channels: [this.lobbyChannel],
            withPresence: true
          });
          
          this.setState({
            piece: 'O',
          });  
          
          // Publish message
          this.pubnub.publish({
            message: {
              notRoomCreator: true,
              namePhase: this.state.name
            },
            channel: this.lobbyChannel
          });

          this.setState({
            isDisabled: true
          })
        } 
        else{
          // Game in progress
          Swal.fire({
            position: 'top',
            allowOutsideClick: false,
            title: 'Error',
            text: 'Lobby is full.',
            width: 275,
            padding: '0.7em',
            customClass: {
                heightAuto: false,
                title: 'title-class',
                popup: 'popup-class',
                confirmButton: 'button-class'
            }
          })
        }
    }).catch((error) => { 
      console.log(error);
    });
  }

  // Reset everything
  endGame = () => {
    this.setState({
      piece: '',
      isPlaying: false,
      isRoomCreator: false,
      isDisabled: false,
      myTurn: false,
    });

    this.lobbyChannel = null;
    this.gameChannel = null;
    this.roomId = null;  

    this.pubnub.unsubscribe({
      channels : [this.lobbyChannel, this.gameChannel]
    });
  }
  
  displayUsers = () => {
    const users = [];
    let i = 0;
    if (this.state.randomNumbers.length > 1) {
      for (var uuid in this.state.users) {
        if (this.state.users.hasOwnProperty(uuid)) {
          users.push(
            <div className="lobbyUser" key={i}>
              <div className="shadow"></div>
              <div className="s-piece"><img src={emojiFaces[this.state.randomNumbers[i]]} alt="error"/></div>
              {this.state.users[uuid].name}
            </div>
          );
          i++;
        }
      }
    }
    return users;
  }
  setName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  showStartButton = () => {
    if (this.state.isRoomCreator && this.displayUsers().length > 1) {
      return (<button className="start-button"
      onClick={(e) => this.startGame()}
      > Start </button>)
    } else
      return(<div></div>)
  }

  startGame = () => {

    this.pieceSelectionChannel = 'piecePickerLobby--' + shortid.generate().toUpperCase();

    this.setState({
      isPlaying: true
    })

    this.pubnub.publish({
      message: {
        gameStart: true,
        pieceSelectionChannel: this.pieceSelectionChannel
      },
      channel: this.lobbyChannel
    });
  }

  render() {  
    return (
      <div>
        <div className="contenido">
          {
            !this.state.isPlaying &&
            <div className="title">
            <p>Monopoly</p>
          </div>
          }
          {
            !this.state.isPlaying &&
            <div className="game">
              <div className="wtf">
                <input type="text" placeholder="nickname" onChange={e=> this.setName(e)} disabled={this.state.isDisabled}/>
                <div className="button-container">
                  <button 
                    className="create-button "
                    disabled={this.state.isDisabled}
                    onClick={(e) => this.onPressCreate()}
                    > Create 
                  </button>
                  <button 
                    className="join-button"
                    disabled={this.state.isDisabled}
                    onClick={(e) => this.onPressJoin()}
                    > Join 
                  </button>
                  {this.showStartButton()}
                </div>                        
                {this.state.isDisabled && <div className="lobbyUsers">{this.displayUsers()}</div>}
              </div>
              <Footer />
            </div>
          }
        </div>
          {
            this.state.isPlaying && 
            <div className="game-container">
              <PiecePicker isRoomCreator={this.state.isRoomCreator} lobbyChannel={this.pieceSelectionChannel} pubnub={this.pubnub} users={this.state.users} myUUID={this.state.uuid}/>
            </div>
          }
          {/* {!this.state.isPlaying &&} */}
      </div>
    );  
  } 
}

export default App;
