import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom"
import Picture from "./components/Picture"
import {  sendMsg, listenUp, listenForUsers, listenForRoundStart, pictureManager } from './api'
import ImageHandler from './components/ImageHandler'
// subscribeToTimer,
import ContestantController from "./components/ContestantController"
import JudgeController from "./components/JudgeController"
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
    allPlayers: [],
    ourId: "",
    currentImage: "",
    judge: false,
    winner: null
  };
  commentChangeHandler = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  sendCommentHandler = () => {
    sendMsg(this.state.msg)
  }

  checkJudge = () => {
    if(this.state.judgeId === this.state.ourId){
      this.setState({
        judge: true
      })
    }
  }

  roundStart = (message) =>{
    this.setState({
      judgeId: message.judge
    }, this.checkJudge())

  }

  assignUsers = (allUsers) =>{
    this.setState({
      allUsers: allUsers
    }, () => console.log(this.state.allUsers))
  }

  assignImage = (url) => {
    this.setState({
      currentImage: url
    })
  }

  componentDidMount(){
    let self = this
    // let allMessages = self.state.allMsg
    pictureManager(this.assignImage)
    listenForUsers(this.assignUsers)
    listenForRoundStart(this.roundStart)
    listenUp((msg) => {
      console.log("hi" + msg.body)
      console.log(msg)
      self.setState({
        allMsg: [...self.state.allMsg, msg.body],
        ourId: msg.from
      })
    })
  }

  displayMsg = () => {
    return this.state.allMsg.map((message, index) =>{
    return  <li key={index}>{message}</li>
    })
  }

  setWinner = (event) => {
    console.log(event)
  }

  nextGameHandler = () => {
    console.log("We need to start the next round")
  }

  render() {
    return (
      <div className="App">

        {/* <input type="text" onChange={this.commentChangeHandler} value={this.state.msg}></input><button onClick={this.sendCommentHandler}>Send</button> */}
        {/* <Picture currentImage={this.state.currentImage}/> */}
        <ImageHandler />
        {this.state.judge ? (<JudgeController judge={this.state.judge} allMsg={this.state.allMsg} winner={this.state.winner} setWinner={this.setWinner} nextGameHandler={this.nextGameHandler}  />) : (<ContestantController commentChangeHandler={this.commentChangeHandler} msg={this.state.msg} sendCommentHandler={this.sendCommentHandler} judge={this.state.judge} allMsg={this.state.allMsg} winner={this.state.winner} setWinner={this.setWinner}/>)}
        <ul>
          {this.displayMsg()}
        </ul>
      </div>
    );
  }
}

export default App;
