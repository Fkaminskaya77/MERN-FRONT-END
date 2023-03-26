
import './App.css';
import Tasks from './Components/Tasks';

function App() {
 fetch("localhost:4000") 
 .then(res => console.log(res))
 .then()
  return (
 
 <div className="App">
     <div className="background"></div>
     <Tasks/>
    </div>
  );
}



export default App;

//App.js - import nav bar from components directory & date / time