import React from "react";
 

function NoteForm({handleBtnClick}) {
  
  return(
    
    <div>
      <form>

        <input type="text" placeholder="title"></input>
        <textarea></textarea>
        <button className="close_button" onClick={handleBtnClick}>x</button>
        <button>Submit</button>
      </form>
    </div> 
  );
}

export default NoteForm;