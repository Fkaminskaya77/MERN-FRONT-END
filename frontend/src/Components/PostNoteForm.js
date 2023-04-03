import React from "react";
import { useState } from "react";
import { postNote } from "../CRUD/noteFunction.js";
 

function PostNoteForm({handleBtnClick}) {
  const [data, setData] = useState({
  title: "",
  body: "",
})

function handleChange(e) {
  const newData = {...data}
  newData[e.target.id] = e.target.value
  setData(newData)
  console.log(newData)
}


return(
    
    <div className="container--form">
      
      <form onSubmit={(e) => postNote(e, data.title, data.body)}>
        <h2 className="form__title content__title">New Note</h2>
        <input className="form__text-input" onChange={(e)=> handleChange(e)} id="title" value={data.title} type="text" placeholder="title" required></input>
        <textarea className="form__textarea" onChange={(e)=> handleChange(e)} id="body" value={data.body} placeholder= "Add your note here.." required></textarea>
        <button className="form__close-btn" onClick={handleBtnClick}>&#215;</button>
        <button className="form__submit-btn btn--gray" type="submit">Submit</button>
      </form>
    </div> 
  );
}

export default PostNoteForm;