import "./index.css";
import All from "./components/All";
function App() {
  return (
    <div className="App">
      <h1>#todo</h1>

      <div className="links">
        <a href="#">All</a>
        <a href="#">Active</a>
        <a href="#">Completed</a>
      </div>
      <div>
        <All />
      </div>
    </div>
  );
}

export default App;
