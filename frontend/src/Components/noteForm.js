import React from "react";
import { useState } from "react";
 

function NoteForm() {
  // console.log("Form");
  const [closeForm, setCloseForm] = useState(true);
  const handleNewCloseClick = () => {
    setCloseForm(false);
  };

 
  {closeForm && (
    
    <div>
      <form>

        <input type="text" placeholder="title"></input>
        <textarea></textarea>
        <button className="close_button" onClick={handleNewCloseClick}>Close!</button>
        <button>Submit</button>
      </form>
    </div> 
  )};
}

export default NoteForm;