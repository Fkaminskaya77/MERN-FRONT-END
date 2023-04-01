import React from "react";
import { useState } from "react";
 

function NoteForm() {
  // console.log("Form");
  const [open,setOpen] = useState(false)
  const styles = {
    popup:{
      display: open ? "flex" : "none",
      opacity: open ? "1" : "0",
    }
  };
  // <div className="main">
  //     <button className="open_button" onClick={()=>{setOpen(true)}}>Open!</button>
    
       

  //     </div>
   
 
 
 
  return (
    <div>
      <form style = {styles.popup}>

        <input type="text" placeholder="title"></input>
        <textarea></textarea>
        <button className="close_button" onClick={()=>{setOpen(false)}}>Close!</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NoteForm;