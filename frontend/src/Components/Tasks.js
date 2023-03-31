import react from "react";

function Tasks({ Task }) {
  return (
    <main className="tasks--page">
      <div className="content--container">
        {Task.map((task, index) => {
          if (task.urgency == "low") {
            return (
              <div key={index} className="content--container low-urgency">
                <h3 className="content__Title">{task.title}</h3>
                <ul>
                  {task.toDos.map((toDos, index) => {
                    return <li key={index}>{toDos}</li>;
                  })}
                </ul>
              </div>
            );
          } else if (task.urgency == "medium") {
            return (
              <div key={index} className="content--container med-urgency">
                <h3 className="content__Title">{task.title}</h3>
                <ul>
                  {task.toDos.map((toDos, index) => {
                    return <li key={index}>{toDos}</li>;
                  })}
                </ul>
              </div>
            );
          } else if (task.urgency == "high") {
            return (
              <div key={index} className="content--container high-urgency">
                <h3 className="content__Title">{task.title}</h3>
                <ul>
                  {task.toDos.map((toDos, index) => {
                    return <li key={index}>{toDos}</li>;
                  })}
                </ul>
              </div>
            );
          }
        })}
        <div className="content__icons">
          <button>
            <i className="fa-solid fa-trash"></i>
          </button>
          <button>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>

          <button>NEW TASK +</button>
        </div>
      </div>
    </main>
  );
}

export default Tasks;
