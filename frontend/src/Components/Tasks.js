import {react, useState} from "react";
import { deleteTask } from "../CRUD/taskFunction.js";
import TaskForm from "./TaskForm.js"

function Tasks({ Task }) {
  const [showForm, setShowForm] = useState(false);
  const handleNewNoteClick = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  return (
    <main className="page">
      <h2 className="page__title">Tasks</h2>
      <button onClick= {handleNewNoteClick} className="btn--gray">NEW TASK +</button>
      <div className="container--flex">

        {showForm && <TaskForm handleBtnClick={handleNewNoteClick}/>}

        {Task.map((task, index) => {
          if (task.urgency == "low") {
            return (
              <div key={index} className="content--container low-urgency">
                <h3 className="content__title">{task.title}</h3>
                <ul className="content__body content__ul">
                  {task.toDos.map((toDos, index) => {
                    return <li key={index}>{toDos}</li>;
                  })}
                </ul>
                <div className="content__icons">
                  <button onClick={() => deleteTask(task._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            );
          } else if (task.urgency == "medium") {
            return (
              <div key={index} className="content--container med-urgency">
                <h3 className="content__title">{task.title}</h3>
                <ul className="content__body content__ul">
                  {task.toDos.map((toDos, index) => {
                    return <li key={index}>{toDos}</li>;
                  })}
                </ul>
                <div className="content__icons">
                  <button onClick={() => deleteTask(task._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            );
          } else if (task.urgency == "high") {
            return (
              <div key={index} className="content--container high-urgency">
                <h3 className="content__title">{task.title}</h3>
                <ul className="content__body content__ul">
                  {task.toDos.map((toDos, index) => {
                    return <li key={index}>{toDos}</li>;
                  })}
                </ul>
                <div className="content__icons">
                  <button onClick={() => deleteTask(task._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            );
          }
        })}

        
      </div>
    </main>
  );
}

export default Tasks;
