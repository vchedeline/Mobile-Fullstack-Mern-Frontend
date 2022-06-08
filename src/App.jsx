import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="navbar sticky-top">
        <Header />
      </header>
      <Main />
      <footer className="navbar sticky-bottom">
        <div className="container-fluid nav">
          <Nav />
        </div>
      </footer>
    </div>
  );
}

export default App;
