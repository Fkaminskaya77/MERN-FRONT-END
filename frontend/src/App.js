import "./App.css";
import Tasks from "./Components/Tasks";
import Clock from "./Components/homepage";

function App() {
  fetch("localhost:4000")
    .then((res) => console.log(res))
    .then();
  return (
    <div className="App">
      <div className="background"></div>
      <Tasks />
      <Clock />
    </div>
  );
}

export default App;

//App.js - import nav bar from components directory & date / time
