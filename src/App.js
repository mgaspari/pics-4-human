import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom"
import Picture from "./components/Picture"
import {  sendMsg, listenUp, listenForUsers, listenForRoundStart,listenForRoundWinner, pictureManager, initRoundEnd, listenForPicUpdate, listenForPointUpdate, awardPoint, assignMyId} from './api'
import ImageHandler from './components/ImageHandler'
// subscribeToTimer,
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   subscribeToTimer((err, timestamp) => this.setState({
  //     timestamp
  //   }));
  // }

  state = {
    msg: "",
    allMsg: [],
    currentImage: "",
    currentPoints: {},
    judge: null
  };


  changeHandler = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  clickHandler = (e) => {
    sendMsg(this.state.msg)
  }
  roundStart = (message) =>{
    this.setState({
      judge: message.judge
    })

  }

  roundEnd = () =>{
    this.setState({
      allMsg: []
  })
}
  announceWinner = (winnerObject) =>{
    alert("WE DID IT")
  }

  updatePoints = (currentPoints) =>{
    this.setState({
      currentPoints: currentPoints
    }, () => console.log(this.state.currentPoints))
  }

  assignUsers = (allUsers) =>{
    this.setState({
      allUsers: allUsers
    }, () => console.log(this.state.allUsers))
  }

  assignImage = (url) => {
    this.setState({
      currentImage: url,
      allMsg: []
    })
  }

  assignId = (id) => {
    this.setState({
      myId: id
    })
  }

  componentDidMount(){
    let self = this
    // let allMessages = self.state.allMsg
    pictureManager(this.assignImage)
    listenForPicUpdate(this.assignImage)
    listenForUsers(this.assignUsers)
    listenForRoundStart(this.roundStart)
    listenForRoundWinner(this.announceWinner)
    listenForPointUpdate(this.updatePoints)
    assignMyId(this.assignId)
    listenUp((msg) => {
      self.setState({
        allMsg: [...self.state.allMsg, [msg.body,msg.from]]
      }, () => {console.log(self.state.allMsg)})
    })
  }

  handleWinner = (event) => {
    awardPoint(this.state.myId)
  }

  displayMsg = () => {
    return this.state.allMsg.map((message, index) =>{
    return  <li key={index} onClick={this.handleWinner}>{message[0]}</li>
    })
  }

  clearText = (event) => {
    this.setState({
      msg: ""
    })
  }

  render() {
    return (
      <div className="App">

        <input type="text" onChange={this.changeHandler} value={this.state.msg} onClick={this.clearText}></input><button onClick={this.clickHandler}>Send</button>
         <Picture currentImage={this.state.currentImage}/>
        // <ImageHandler />
        <ul>
          {this.displayMsg()}
        </ul>
        <button onClick={initRoundEnd}>Next Round</button>
      </div>
    );
  }
}

export default App;
