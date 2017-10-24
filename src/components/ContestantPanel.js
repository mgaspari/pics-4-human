import React from "react"
import CommentBox from "./CommentBox"

export default class ContestantPanel extends React.Component{
  
  render(){
    return(
      <div>
      <CommentBox onTypeChange={this.props.onTypeChange} boxValue={this.props.boxValue} onClearClick={this.props.onClearClick} onSendClick={this.props.onSendClick} />
      </div>

    )
  }
}
