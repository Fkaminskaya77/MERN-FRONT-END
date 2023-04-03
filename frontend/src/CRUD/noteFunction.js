export function deleteNote(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/notes/" + id, {
    method: "DELETE"

  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
    .catch((id) => console.log(id));
  alert("Note will be deleted!");
  window.location.reload();
}


export function postNote(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/notes/", {
    method: "POST",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
    .catch((id) => console.log(id));
  window.location.reload();
}
