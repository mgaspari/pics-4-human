import React from "react"

export default class Contestant extends React.Component{
  render(){
    return(
      <Picture/>
      // This needs to be put in a terniary
      <CommentBar/>
      <Comments/>

    )
  }
}
