import React from "react";
import {useState} from "react";

function EditNoteForm({handleBtnClick}) {
    const [editData, setEditData] = useState({
    title: "",
    body: "",
  })

  function handleChange(e) {
    const newData = {...editData}
    newData[e.target.id] = e.target.value
    setEditData(newData)
    console.log(newData)
  }

//   onSubmit={(e) => postNote(e, data.title, data.body)}
  return(
      
      <div className="container--form">
        
        <form >
          <h2 className="form__title content__title">New Note</h2>
          <input className="form__text-input" onChange={(e)=> handleChange(e)} id="title" value={editData.title} type="text" placeholder="title" required></input>
          <textarea className="form__textarea" onChange={(e)=> handleChange(e)} id="body" value={editData.body} placeholder= "Add your note here.." required></textarea>
          <button className="form__close-btn" onClick={handleBtnClick}>&#215;</button>
          <button className="form__submit-btn btn--gray" type="submit">Submit</button>
        </form>
      </div> 
    );
  }
  
  export default EditNoteForm;