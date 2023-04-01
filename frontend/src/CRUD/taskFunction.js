export function deleteTask(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/tasks" + id, {
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
