export function deleteTask(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/task/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
    .catch((id) => console.log(id));
  alert("Task will be deleted!");
  window.location.reload();
}

export function postTask(e, taskTitle, taskBody, taskUrgency) {


  e.preventDefault();
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/tasks/", {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      title: taskTitle,
      toDos: taskBody,
      urgency: taskUrgency
    })
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
    // .catch((id) => console.log(id));
    .then(() => window.location.reload())
}
