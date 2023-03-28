# MERN-FRONT-END

#### THE USER EXPERIENCE - Functionality
The database brings together information on important Departments that operate America such as laws, and budgets according to the respective departments. I aim to bring in more data and sort it to be more fluid and informational for the average reader.

The agency codes are: 
1. React
2. Node, Express,
3. axios, and others

### EXAMPLES OF CODE:
    //SAMPLE DATA from US.GOV on the US Department of Agrigiculture funds according to department
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
    
    
## Coding w/in Building the API //with comments
#### File Tree:

            /lib
                /db - the Database
                    /1 seed.js
                    /2 connection.js
                    /4 budget.json
                /controllers
                    /1 .js
                    /2 .js
                    /3 .js
                /models - schemas
                    /1 .js
                    /2 .js
                    /3 .js
                /routes
                    /1 .js 
                    /1 .js
                    /2 .js
                    /3 .js
                index.js
