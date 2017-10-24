import React from "react"
import Comments from "./Comments"
import NextRoundButton from "./NextRoundButton"

export default class JudgePanel extends React.Component{
  render(){
    return(
      <div>
      <Comments displayMsg={this.props.displayMsg} />
      <NextRoundButton allComments={this.props.allComments} winnerId={this.props.winnerId} />
      </div>
    )
  }
}
