import React from "react"

export default class CommentBox extends React.Component{

  handleClick = () => {
    this.props.onSendClick()
    this.props.handleSubmission()
  }

  render(){
    return(
      <div>

      {this.props.hasSubmitted ? <p>Sent! Waiting on judge!</p> : <div> <input type="text" onChange={this.props.onTypeChange} value={this.props.boxValue} onClick={this.props.onClearClick}></input><button onClick={this.handleClick}>Send</button> </div>}
      </div>
    )
  }
}
