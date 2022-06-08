import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function SubMenu({ menu, currentOrder, totalDue, setTotalDue }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = menu.filter((i) => i.group === id);

  function addToOrder(item) {
    let total = 0;
    currentOrder.push(item);
    currentOrder.forEach((e) => (total += e.price));
    setTotalDue(total.toFixed(2));
    navigate("/checkout");
  }

  return (
    <main className="submenu">
      <div>
        <h1>{id}</h1>
        <button>
          <Link to={"/menu"}>BACK TO MENU</Link>
        </button>
      </div>
      <div id="items">
        {items.map((ele, idx) => {
          return (
            <div key={idx} className="food-item">
              <h2>{ele.name}</h2>
              <h2>${ele.price}</h2>
              <button onClick={() => addToOrder(ele)}>Add To Order</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
