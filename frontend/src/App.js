import "./App.css";
import Tasks from "./Components/Tasks.js";
import Notes from "./Components/Notes.js";
import Clock from "./Components/homepage.js";
import Navbar from "./Components/Navbar.js";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

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
  //console.log(Task);

  //Fetching Data from API Notes
  function getNote() {
    fetch(URLN)
      .then((response) => response.json())
      .then((data) => setNote(data));
  }
  useEffect(getNote, []);
  //console.log(Note);

  return (
    <div className="App">
      <Navbar homeLink="/" notesLink="/notes" tasksLink="/tasks" />
      <Routes>
        <Route path="/" element={<Clock />}></Route>
        <Route path="/notes" element={<Notes Note={Note} />}></Route>
        <Route path="/tasks" element={<Tasks Task={Task} />}></Route>
      </Routes>
    </div>
  );
}
export default App;
