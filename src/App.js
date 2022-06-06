import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import DenseAppBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <DenseAppBar />
      </div>
      <header className="header">
        <h2>Expens Traker</h2>
      </header>
      <div className="expense">
        <ExpenseApp />
      </div>
    </div>
  );
}

export default App;
