import { Link } from "react-router-dom";

export default function Home({ setCurrentOrder }) {
  function handleClick() {
    setCurrentOrder([]);
  }

  return (
    <main className="home">
      <h1>Home Page</h1>
      <div>
        <button>
          <Link to={"/menu"}>FULL MENU</Link>
        </button>
        <button onClick={handleClick}>
          <Link to={"/menu"}>START NEW ORDER</Link>
        </button>
      </div>
    </main>
  );
}
