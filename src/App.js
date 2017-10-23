import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom"
import Picture from "./components/Picture"
import {  sendMsg, listenUp, listenForUsers, listenForRoundStart, pictureManager } from './api'
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
    allPlayers: [],
    ourId: "",
    currentImage: ""
  };


  changeHandler = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  clickHandler = (e) => {
    e.preventDefault()
    sendMsg(this.state.msg)
  }
  roundStart = (message) =>{
    this.setState({
      judge: message.judge
    },() => console.log(this.state))

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

  clearText = (event) => {
    event.target.select()
    // this.setState({
    //   msg: ""
    // })
  }

  render() {
    return (
      <div className="App">

        <input type="text" onChange={this.changeHandler} value={this.state.msg} onClick={this.clearText}></input><button onClick={this.clickHandler}>Send</button>
        {/* <Picture currentImage={this.state.currentImage}/> */}
        <ImageHandler />
        <ul>
          {this.displayMsg()}
        </ul>
      </div>
    );
  }
}

export default App;
