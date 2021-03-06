import React, {useRef, useState} from 'react'
import "../TopCommentsBox/CommentsBox.css"
function TopCommentsBox(props) {

  const message = useRef(null)
  //Triger the underline animation
  const [showComentLine, setCommentLine] = useState(false);
  // True on focus. False on cancel process
  const [showButtons, setShowButtons] = useState(false);
  //True on input data. False when input is blank
  const [enableBtn, setEnableBtn] = useState(true);

  //when they click on the Input. Show the underline and the buttons
  const commentFocus = () => {
    setCommentLine(true);
    setShowButtons(true);
  }

  //When they click on the input. Hide the underline
  const commentFocusOut = () => {
    setCommentLine(false)
  }

  //If input value isn't empty then enable the comment btn
  const commentStroke = (event) => {
    let currMessage = event.target.value;
    currMessage ? setEnableBtn(false) : setEnableBtn(true)
  }

  // send Comment
  const sendComment = (event) => {
    event.preventDefault();
    return console.log("I'm here")

  }
  
  const buttonCommentForm = () => {
    if(showButtons)
     return (<>
        <button
          className="commentButton sendButton"
          
          disabled={enableBtn} onClick={sendComment} >COMMENT
        </button>
        <button 
          className="commentButton"
          style={{color: "grey", backgroundColor:"transparent"}} 
          onClick={() => {
            setShowButtons(false);
            message.current.value = ""            
          }}
        >CANCEL
        </button>
      </>)
  } 

  const commentBoxForm = () => {
    return (
     <form>
      <section className="commentBox">
        <input 
          autoFocus={props.autoFocus}
          type="text"
          placeholder="Add a public comment..."
          ref={message}
          onFocus={commentFocus}
          onBlur={commentFocusOut}
          onKeyUp={commentStroke}
        />
        {/* underline begins here */}
        {showComentLine && <div className="commentLine"></div>}
        <div className="commentLine"> </div>
      </section>

     { buttonCommentForm()}
    </form>
    )}
  
  return (
    commentBoxForm()
  )
}

export default TopCommentsBox