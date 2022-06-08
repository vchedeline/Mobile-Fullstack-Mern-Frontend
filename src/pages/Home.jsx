import { Link } from "react-router-dom";

export default function Home({ setCurrentOrder, setTotalDue }) {
  function handleClick() {
    setCurrentOrder([]);
    setTotalDue(0);
  }

  return (
    <main className="home">
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
