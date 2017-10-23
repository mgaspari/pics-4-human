import React from "react"

function CommentBox(props){

  let highlightText = (event) => {
    event.target.select()
  }

  return(
    <div>
    <input type="text" onChange={props.commentChangeHandler} value={props.msg} onClick={highlightText}></input><button onClick={props.sendCommentHandler}>Send</button>
  </div>
  )
}

export default CommentBox
