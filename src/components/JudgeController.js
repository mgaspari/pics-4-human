import React from "react"

export default class JudgeController extends React.Component{
  render(){
    return(
      // The whole app should have a restart button
      <Picture/>
      <Comments/>
      //Do you want to reuse components and have logic or have more multiple components?
      <NextGame/>
    )
  }
}
