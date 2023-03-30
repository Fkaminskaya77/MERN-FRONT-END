import "./App.css";
import Tasks from "./Components/Tasks.js";
import Clock from "./Components/homepage.js";
import React,{useState, useEffect} from "react";

function App() {
    //API URL 
    const URL = "https://mern-dashboard-grp3.herokuapp.com/";
    const [Task, setTask] = useState([])
  
      //Fetching Data from API
    function getTask () {
      fetch(URL)
      
    .then(response => response.json())
    .then(data => setTask(data))
  }
    useEffect(getTask, []);
    console.log(Task)
 
    return (
    <main className="App">
      <div className="background"></div>
      <Tasks />
      <Clock />
     
    </main>
  );
}

export default App;

//App.js - import nav bar from components directory & date / time
