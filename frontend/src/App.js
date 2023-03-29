import "./App.css";
import Tasks from "./Components/Tasks.js";
import Notes from "./Components/Notes.js"
import Clock from "./Components/homepage.js";

function App() {
//should this gen fetch be getting whole page link to connect it to front end?
  fetch("localhost:4000")
    .then((res) => console.log(res))
    .then();
  return (
    <div className="App">
      <div className="background"></div>
      <Notes />
      <Tasks /> 
      <Clock />
    </div>
  );
}

export default App;

//App.js - import nav bar from components directory & date / time
