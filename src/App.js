import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom"
import Picture from "./components/Picture"
import {  sendMsg, listenUp, listenForUsers, listenForRoundStart,listenForRoundWinner, pictureManager, initRoundEnd, listenForPicUpdate, listenForPointUpdate, awardPoint, assignMyId} from './api'
import ImageHandler from './components/ImageHandler'
import Scoreboard from './components/Scoreboard'
import ContestantPanel from './components/ContestantPanel'
import JudgePanel from './components/JudgePanel'
import WinnerModal from "./components/WinnerModal"
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
    judge: null,
    openModal: false
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
    console.log("hi")
  }

  updatePoints = (currentPoints) =>{
    this.setState({
      currentPoints: currentPoints
    })
  }

  assignUsers = (allUsers) =>{
    this.setState({
      allUsers: allUsers
    })
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
      })
    })
  }

  handleWinner = (id) => {
    this.setState({
      openModal: true
    })
    
    awardPoint(id)
  }

  displayMsg = () => {
    return this.state.allMsg.map((message, index) =>{
      return (<div role="listitem" key={index} className="item" onClick={this.handleWinner.bind(this, message[1])}>
    <i aria-hidden="true" className="comment outline icon"></i>
    <div className="content">{message[0]}</div>
  </div>)

    })
  }

  clearText = (event) => {
    this.setState({
      msg: ""
    })
  }

  handleModal = () => {
    this.setState({
      openModal: false
    })
  }



  render() {
    return (
      <div className="App">

      <Scoreboard score={this.state.currentPoints}/>
      {this.state.judge === this.state.myId ? <JudgePanel displayMsg={this.displayMsg()} allComments={this.state.allMsg}/> : <ContestantPanel onTypeChange={this.changeHandler} boxValue={this.state.msg} onClearClick={this.clearText} onSendClick={this.clickHandler} />}

         <Picture currentImage={this.state.currentImage}/>
        // <ImageHandler />
      <WinnerModal openModal={this.state.openModal} handleModal={this.handleModal}/>
      </div>
    );
  }
}

export default App;
