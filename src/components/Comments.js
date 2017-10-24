import React from "react"


export default class Comments extends React.Component{
  render(){
    return(
      <div role="list" class="ui list">
        {this.props.displayMsg}
      </div>

    )
  }
}
