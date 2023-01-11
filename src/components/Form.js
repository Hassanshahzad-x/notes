import React, { useState } from 'react'


export default function Form(props) {
   const handleUpper = () => {
      let txt = text.toUpperCase()
      setText(txt)
   }
   const handleLower = () => {
      let txt = text.toLowerCase()
      setText(txt)
   }
   const handleClear = () => {
      setText("")
   }
   const handleCopy = () => {
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
   }
   const handleExtraSpaces = () => {
      var txt = text.split(/[ ]+/)
      setText(txt.join(" "))
   }
   const handleText = (event) => {
      setText(event.target.value)
   }
   const [text, setText] = useState("")
   return (
      <>
         <div className='container'>
            <h1>Welcome to Nottes</h1>
            <div className=" mb-3">
               <textarea className="form-control" id="myBox" value={text} onChange={handleText} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpper}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLower}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Spaces</button>
         </div>
         <div className='container my-3'>
            <h2>Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
         </div>
      </>
   )
}