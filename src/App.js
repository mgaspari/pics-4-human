import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom"
import {  sendMsg, listenUp, listenForUsers } from './api'
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
    ourId: ""
  };

  componentDidMount(){

  }

  changeHandler = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  clickHandler = () => {

    sendMsg(this.state.msg)
  }

  assignUsers = (allUsers) =>{
    this.setState({
      allUsers: allUsers
    }, () => console.log(this.state.allUsers))
  }

  componentDidMount(){
    let self = this
    // let allMessages = self.state.allMsg
    listenForUsers(this.assignUsers)

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

  clearText = () => {
    this.setState({
      msg: ""
    })
  }

  render() {
    return (
      <div className="App">

        <input type="text" onChange={this.changeHandler} value={this.state.msg} onClick={this.clearText}></input><button onClick={this.clickHandler}>Send</button>
        <ul>
          {this.displayMsg()}
        </ul>
      </div>
    );
  }
}

export default App;
