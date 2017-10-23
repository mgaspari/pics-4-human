import React from "react"
import Comments from "./Comments"
import NextGame from "./NextGame"

export default class JudgeController extends React.Component{
  render(){
    return(
      // The whole app should have a restart button
      <div>
      <Comments judge={this.props.judge} allMsg={this.props.allMsg} winner={this.props.winner} setwinner={this.props.setWinner}/>

      {this.props.winner ? <NextGame nextGameHandler={this.props.nextGameHandler} /> : null}
    </div>
    )
  }
}
