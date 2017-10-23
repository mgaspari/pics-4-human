import React from "react"
import CommentBox from "./CommentBox"
import Comments from "./Comments"

export default class ContestantController extends React.Component{
  render(){
    return(

      // This needs to be put in a terniary
      <div>
      <CommentBox commentChangeHandler={this.props.commentChangeHandler} msg={this.props.msg} sendCommentHandler={this.props.sendCommentHandler} />
      <Comments judge={this.props.judge} allMsg={this.props.allMsg} winner={this.props.winner} setwinner={this.props.setWinner}/>
    </div>
    )
  }
}
