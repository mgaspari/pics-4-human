import React from "react"

export default class CommentBox extends React.Component{

  handleClick = () => {
    this.props.onSendClick()
    this.props.handleSubmission()
  }

  render(){
    return(
      <div>

      {this.props.hasSubmitted ? <p>Sent! Waiting on judge!</p> : <div> <div className="ui input">
        <input type="text" placeholder="Please enter a caption!" onChange={this.props.onTypeChange} value={this.props.boxValue} onClick={this.props.onClearClick} />
      </div>

      <button className="ui teal button" role="button" onClick={this.handleClick}>Meme Away!</button>

      </div>
    }
    </div>
  )
}
}
