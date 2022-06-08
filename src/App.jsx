import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <footer className="navbar sticky-bottom">
        <div className="container-fluid">
          <Nav />
        </div>
      </footer>
    </div>
  );
}

export default App;
