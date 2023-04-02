import React from "react";
import { useState } from "react";
 

function NoteForm({handleBtnClick}) {
  // const url = ""
const [data, setData] = useState({
  title: "",
  body:"",
})

function handleChange(e) {
const newData = {...data}
newData[e.target.id] = e.target.value
setData(newData)
console.log(newData)
}

return(
    
    <div>
      <form>

        <input onChange={(e)=> handleChange(e)} id="title" value={data.title} type="text" placeholder="title"></input>
        <textarea onChange={(e)=> handleChange(e)} id="body" value={data.body} placeholder= "Add your note here.."></textarea>
        <button className="close_button" onClick={handleBtnClick}>x</button>
        <button>Submit</button>
      </form>
    </div> 
  );
}

export default NoteForm;