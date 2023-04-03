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



export function postNote(e, noteTitle, noteBody) {
  e.preventDefault();
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/notes/", {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      title: noteTitle,
      body: noteBody
    })

  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })

    .then(() => window.location.reload());

}
