import React, { Component } from 'react';
import Game from './Components/Game';
import Board from './Components/Board';
import PubNubReact from 'pubnub-react';
import PiecePicker from './Components/PiecePicker';
import Swal from "sweetalert2";  
import shortid  from 'shortid';
import './css/main.css';
 
class App extends Component {
  constructor(props) {  
    super(props);
    const generatedUUID = 'uuid-' + shortid.generate() + shortid.generate();
    this.pubnub = new PubNubReact({
      publishKey: "pub-c-6d0fb65e-2fe5-465e-9c57-e092377761aa", 
      subscribeKey: "sub-c-4b54e996-9fa8-11eb-9adf-f2e9c1644994",
      uuid: generatedUUID
    });
    
    this.state = {
      piece: '',
      isPlaying: false,
      isRoomCreator: false,
      isDisabled: false,
      myTurn: false,
      users: {[generatedUUID]: {name: 'uwu', player: 'player-null'}},
      name: 'uwu',
      uuid: generatedUUID,
      player: 'player-null'
    };

    this.lobbyChannel = null;
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
            curUsers[event.uuid] = {name: 'goku', player: 'player-null'};
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
            if (msg.message.users) {
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
                curUsers[msg.publisher].name = msg.message.namePhase;
                this.setState({
                  users: curUsers
                });

                // Send users back to all subscribers
                this.pubnub.publish({
                  message: {
                    users: this.state.users
                  },
                  channel: this.lobbyChannel
                });
            }

            // Listen for gameStart
            if (msg.message.gameStart){
              this.setState({
                isPlaying: true
              });}

            // Listen for picks
            if (msg.message.myPick) {
              const curUsers = this.state.users;

              let idAlreadyPicked = false;

              if(curUsers[msg.publisher].hasOwnProperty('piece_id')) {
                if (curUsers[msg.publisher].piece_id === msg.message.myPick){
                  idAlreadyPicked = true;
                }
              }
              
              for (let uuid in curUsers){
                if(curUsers.hasOwnProperty(uuid)){
                  if(uuid.hasOwnProperty('piece_id')){
                    if (uuid.piece_id === msg.message.myPick) {
                      idAlreadyPicked = true;
                      break;
                    }
                  }
                }
              }
              if (!idAlreadyPicked) {
                curUsers[msg.publisher].piece_id = msg.message.myPick;
                this.setState({
                  users: curUsers
                });

                this.pubnub.publish({
                  message: {users: this.state.users},
                  channel: this.lobbyChannel
                })
              }
            }

            
          // Close the modals if they are opened
          Swal.close();
        }
      ); 
    }
  }

  // Create a room channel
  onPressCreate = (e) => {
    // Create a random name for the channel
    this.roomId = shortid.generate().substring(0,5).toUpperCase();
    this.lobbyChannel = 'monopolylobby--' + this.roomId;
    console.log(this.roomId);

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
        if(response.totalOccupancy < 10){
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
              name: this.state.name
            },
            channel: this.lobbyChannel
          });
        } 
        else{
          // Game in progress
          Swal.fire({
            position: 'top',
            allowOutsideClick: false,
            title: 'Error',
            text: 'Game in progress. Try another room.',
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
    for (var uuid in this.state.users) {
      if (this.state.users.hasOwnProperty(uuid)) {
        users.push(<div key={i}>{this.state.users[uuid].name}</div>);
        i++;
      }
    }
    return users;
  }
  setName = (e) => {
    this.setState({
      name: e.target.value
    })
    
    console.log(this.pubnub.getUUID());
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
    this.setState({
      isPlaying: true
    })

    this.pubnub.publish({
      message: {
        gameStart: true
      },
      channel: this.lobbyChannel
    });
  }

  onPublish = (messagePackage) => {
    this.pubnub.publish({
      message: messagePackage,
      channel: this.lobbyChannel});
    console.log('msg package sent:', messagePackage);
  }

  render() {  
    return (  
        <div> 
          <div className="title">
            <p>Monopoly</p>
          </div>

          {
            !this.state.isPlaying &&
            <div className="game">
              <div className="wtf">
                <input type="text" placeholder="nickname" onChange={e=> this.setName(e)}/>
                <div className="button-container">
                  <button 
                    className="create-button "
                    disabled={this.state.isDisabled}
                    onClick={(e) => this.onPressCreate()}
                    > Create 
                  </button>
                  <button 
                    className="join-button"
                    onClick={(e) => this.onPressJoin()}
                    > Join 
                  </button>
                  {this.showStartButton()}
                </div>                        
                <div>{this.displayUsers()}</div>
                
              </div>
            </div>
          }
          {
            !this.state.isPlaying && 
            <div className="game-container">
              <PiecePicker onPublish={this.onPublish}/>
              <Board />
            </div>
          }
        </div>
    );  
  } 
}

export default App;
