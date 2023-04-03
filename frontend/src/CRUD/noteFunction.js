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


<<<<<<< HEAD
export function postNote(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/notes/", {
    method: "POST",
=======
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
>>>>>>> 81bd7e01fd9fc09d41bdab46f1177ee5af467f39
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
<<<<<<< HEAD
    .catch((id) => console.log(id));
  window.location.reload();
=======
    // .catch((id) => console.log(id));
    .then(() => window.location.reload())
>>>>>>> 81bd7e01fd9fc09d41bdab46f1177ee5af467f39
}
