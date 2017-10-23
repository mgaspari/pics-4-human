import React from "react"

class Comment extends React.Component{

displayComment = () => {
    if(this.props.judge){
      if(this.props.winner){
          return <li key={this.props.keyNumber} style={{color: "orange"}}>Winner: {this.props.message}</li>
        }
        else{
          return <li key={this.props.keyNumber} onClick={this.props.setWinner}>{this.props.message}</li>
        }

      }
    else{
      if(this.props.winner){
        return <li key={this.props.keyNumber} style={{color: "orange"}}>Winner: {this.props.message}</li>
      }
      else{
        return <li key={this.props.keyNumber}>{this.props.message}</li>
      }

    }

  }
  render(){
    return(
      <div>
      {this.displayComment()}
    </div>
    )
  }
}

export default Comment
