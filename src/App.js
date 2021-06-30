import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";
// sample data

const todos = [
  { id: 1, title: "The Lean Startup", status: false },
  { id: 2, title: "Work on Project", status: true },
  { id: 3, title: "Signup for digitalocea Hackathons", status: false },
];
function App() {
  const [todoItems, setTodoItems] = useState(todos);

  const addItemHandler = (data) => {
    setTodoItems((prevData) => [data, ...prevData]);
  };

  return (
    <Router>
      <div className="App">
        <h1>#todo</h1>

        <div className="links">
          <Link to="/all">All</Link>
          <Link to="/active">Active</Link>
          <Link to="/completed">Completed</Link>
        </div>
        <div>
          <Switch>
            <Route path="/all">
              <All dataItems={todoItems} onAddData={addItemHandler} />
            </Route>
            <Route path="/active">
              <Active dataItems={todoItems} onAddData={addItemHandler} />
            </Route>
            <Route path="/completed">
              <Completed dataItems={todoItems} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
