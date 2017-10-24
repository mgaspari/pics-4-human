import React from "react"
import {initRoundEnd} from '../api'

export default class NextRoundButton extends React.Component{
  render(){
    return(
      <div>
        {this.props.winnerId ? <button onClick={initRoundEnd}>Next Round</button> : null}
      </div>
    )
  }
}
