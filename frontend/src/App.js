import "./App.css";
import Tasks from "./Components/Tasks.js";
import Notes from "./Components/Notes.js";
import Clock from "./Components/homepage.js";
import React, { useEffect, useState } from "react";

function App() {
  //API URL
  const URLT = "https://mern-dashboard-grp3.herokuapp.com/Tasks";
  const URLN = "https://mern-dashboard-grp3.herokuapp.com/Notes";
  const [Task, setTask] = useState([]);
  const [Note, setNote] = useState([]);

  //Fetching Data from API
  function getTask() {
    fetch(URLT)
      .then((response) => response.json())
      .then((data) => setTask(data));
  }
  useEffect(getTask, []);
  console.log(Task);

  //Fetching Data from API Notes
  function getNote() {
    fetch(URLN)
      .then((response) => response.json())
      .then((data) => setNote(data));
  }
  useEffect(getNote, []);
  console.log(Note);

  return (
    <div className="App">
      <div className="background"></div>
      <Notes Note={Note} />
      <Tasks Task={Task} />
      <Clock />
    </div>
  );
}
export default App;
