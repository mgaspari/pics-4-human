import React from "react"

export default class Scoreboard extends React.Component{

getScore = () => {
  if(Object.entries(this.props.score).length > 0){
  return Object.keys(this.props.score).map((key) => {
    return (<div><a class="item active">
      <div class="ui teal label">{this.props.score[key]}</div>{key}</a>
    </div>)
  })
}
else{
  return null
}

}

  render(){
    return(
      <div className="ui vertical menu">
      {this.getScore()}
      </div>
    )
  }
}
