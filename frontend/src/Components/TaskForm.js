import React from "react";
import { useState } from "react";
import { postTask } from "../CRUD/taskFunction.js";

export default function TaskForm({handleBtnClick}) {
    const [data, setData] = useState({
        title: "",
        toDos: [],
        urgency: ""
      })
      
      function handleChange(e) {
        const newData = {...data}
        if(e.target.id === 'toDos'){
            newData[e.target.id] = e.target.value.split(',')
        } else {
            newData[e.target.id] = e.target.value
        }
        
        setData(newData)
        console.log(newData)
      }


      return(
          
          <div className="container--form">
            <form onSubmit={(e) => postTask(e, data.title, data.toDos, data.urgency)}>
              <h2 className="form__title content__title">New Task</h2>
              <input className="form__text-input" onChange={(e)=> handleChange(e)} id="title" value={data.title} type="text" placeholder="title" required></input>
              <select className="form__select" id="urgency" onChange={(e)=> handleChange(e)} required>
                <option> Urgency </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <textarea className="form__textarea" onChange={(e)=> handleChange(e)} id="toDos" value={data.body} placeholder= "Add your tasks here (separate with commas)..." required></textarea>
              <button className="form__close-btn" onClick={handleBtnClick}>&#215;</button>
              <button className="form__submit-btn btn--gray" type="submit">Submit</button>
            </form>
          </div> 
        );
}
