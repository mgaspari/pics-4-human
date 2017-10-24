import React from "react"


export default class Comments extends React.Component{
  render(){
    return(
      <div role="list" className="ui list">
        {this.props.displayMsg}
      </div>

    )
  }
}
