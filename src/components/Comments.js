import React from "react"
import Comment from "./Comment"

function Comments(props){
let commentFormat = props.allMsg.map((comment, index) => {
    return <Comment keyNumber={index} judge={props.judge} message={comment} winner={props.winner} setWinner={props.setWinner}/>
  })
  return(
    <ul>
      {commentFormat}
    </ul>
  )
}

export default Comments

//might have to look back at the key and make sure it is there and not on the individual li
