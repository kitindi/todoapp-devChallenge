import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";
// sample data

const todos = [
  { id: 1, title: "The Lean Startup", isChecked: false },
  { id: 2, title: "Work on Project", isChecked: false },
  { id: 3, title: "Signup for digitalocea Hackathons", isChecked: false },
];
function App() {
  const [todoItems, setTodoItems] = useState(todos);

  const addItemHandler = (data) => {
    setTodoItems((prevData) => [data, ...prevData]);
  };

  const handleCheckBox = (id) => {
    // alert(id);
    const updatedList = todoItems.map((item) => {
      if (item.id === id) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
      return item;
    });

    setTodoItems(updatedList);
  };

  const handleDeleteOne = (id) => {
    // alert(`Delete this id ${id}`);
    const filteredData = todoItems.filter((item) => item.id !== id);
    setTodoItems(filteredData);
  };
  const handleDeleteAll = () => {
    const cleanData = todoItems.filter((item) => item.completed === false);
    setTodoItems(cleanData);
  };

  return (
    <Router>
      <div className="App">
        <h1>#todo</h1>
        <div className="links">
          <Link to="/">All</Link>
          <Link to="/active">Active</Link>
          <Link to="/completed">Completed</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <All
                dataItems={todoItems}
                onAddData={addItemHandler}
                handleCheckBox={handleCheckBox}
              />
            </Route>
            <Route path="/active">
              <Active
                dataItems={todoItems}
                onAddData={addItemHandler}
                handleCheckBox={handleCheckBox}
              />
            </Route>
            <Route path="/completed">
              <Completed
                dataItems={todoItems}
                handleDeleteOne={handleDeleteOne}
                handleDeleteAll={handleDeleteAll}
                handleCheckBox={handleCheckBox}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
