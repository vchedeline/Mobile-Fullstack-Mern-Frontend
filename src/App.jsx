import "./App.css";
import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <footer className="navbar sticky-bottom">
        <div className="container-fluid">
          <Nav />
        </div>
      </footer>
    </div>
  );
}

export default App;
