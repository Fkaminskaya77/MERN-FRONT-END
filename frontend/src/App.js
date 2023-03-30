import "./App.css";
import Tasks from "./Components/Tasks.js";
// import Notes from "./Components.Notes.js";
// import Clock from "./Components/homepage.js";
import React, {useEffect, useState} from "react";

function App() {
  //API URL From Stranger things Quotes
  const URL = 'https://mern-dashboard-grp3.herokuapp.com/Tasks';
  const [Task, setTask] = useState([])

    //Fetching Data from API
  function getTask() {
    fetch(URL)
    
  .then(response => response.json())
  .then(data => setTask(data))
}
  useEffect(getTask, []);
  console.log(Task)

  return(
    <div classname="App">
    <div classname ="background"></div>
    {/* <Notes /> */}
    <Tasks />
    {/* <Clock /> */}

    </div>


    );
}
  export default App