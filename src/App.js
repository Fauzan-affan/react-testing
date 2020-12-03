import Button from "./components/Button/Button.js";
import './App.css';
import AddToDo from "./components/AddToDo/AddToDo.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddToDo />
      </header>
    </div>
  );
}

export default App;
