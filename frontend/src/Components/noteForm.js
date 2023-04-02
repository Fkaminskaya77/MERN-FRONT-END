import React from "react";
import { useState } from "react";
import { postNote } from "../CRUD/noteFunction.js";
 

function NoteForm({handleBtnClick}) {
  const url = ""
const [data, setData] = useState({
  title: "",
  body:"",
})

// function handleChange(e) {
//   const newData = {...data}
//   newData[e.target.id] = e.target.value
//   setData(newData)
//   console.log(newData)
// }

// onChange={(e)=> handleChange(e)}
// onChange={(e)=> handleChange(e)}

return(
    
    <div>
      <form onSubmit={postNote(data.title, data.body)}>

        <input  id="title" value={data.title} type="text" placeholder="title"></input>
        <textarea  id="body" value={data.body} placeholder= "Add your note here.."></textarea>
        <button className="close_button" onClick={handleBtnClick}>x</button>
        <button type="submit">Submit</button>
      </form>
    </div> 
  );
}

export default NoteForm;