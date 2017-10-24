import React from "react"
import {initRoundEnd} from '../api'

export default class NextRoundButton extends React.Component{
  render(){
    return(
      <div>
        {this.props.allComments.length === 3 ? <button onClick={initRoundEnd}>Next Round</button> : null}
      </div>
    )
  }
}
