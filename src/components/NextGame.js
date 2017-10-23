import React from "react"

function NextGame(props){
  return(
    <button onClick={props.nextGameHandler}>Next Round</button>
  )
}

export default NextGame
