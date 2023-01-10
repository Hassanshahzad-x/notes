import React, { useState } from 'react'


export default function Form() {
   const handleClick = () => {
      setText("Button clicked")
   }
   const handleText = (event) => {
      console.log("object")
      setText(event.target.value)
   }
   const [text, setText] = useState("")
   return (
      <div>
         <h1>Welcome to Nottes</h1>
         <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleText} rows="8"></textarea>
         </div>
         <button className='btn btn-primary' onClick={handleClick}>Convert To Uppercase</button>
      </div>
   )
}