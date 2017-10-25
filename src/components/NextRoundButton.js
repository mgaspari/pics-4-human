import React from "react"
import {initRoundEnd} from '../api'

export default class NextRoundButton extends React.Component{
  render(){
    return(
      <div>
        {this.props.winnerId ? <button onClick={initRoundEnd} className="ui icon right labeled button" role="button">
<i aria-hidden="true" className="right arrow icon"></i>Next Round</button> : null}
      </div>
    )
  }
}
