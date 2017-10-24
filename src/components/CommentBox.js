import React from "react"

export default class CommentBox extends React.Component{
  state = {
    clicked: false
  }
  handleClick = () => {
    this.props.onSendClick()
    this.setState({
      clicked: true
    })
  }
  render(){
    return(

      this.state.clicked ? <p>Sent! Waiting on judge!</p> : <div> <input type="text" onChange={this.props.onTypeChange} value={this.props.boxValue} onClick={this.props.onClearClick}></input><button onClick={this.handleClick}>Send</button> </div>

    )
  }
}
