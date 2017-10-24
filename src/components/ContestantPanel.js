import React from "react"
import CommentBox from "./CommentBox"

export default class ContestantPanel extends React.Component{

  render(){
    return(
      <div>
      <CommentBox  handleSubmission={this.props.handleSubmission} hasSubmitted={this.props.hasSubmitted} onTypeChange={this.props.onTypeChange} boxValue={this.props.boxValue} modalLogic={this.props.modalLogic} onClearClick={this.props.onClearClick} onSendClick={this.props.onSendClick} />
      </div>

    )
  }
}
