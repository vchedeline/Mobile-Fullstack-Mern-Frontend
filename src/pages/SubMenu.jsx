import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function SubMenu({ menu, currentOrder, totalDue }) {
  const { id } = useParams();
  const items = menu.filter((i) => i.group === id);

  function addToOrder(item) {
    console.log("clicked add to order");
    currentOrder.push(item);
    console.log(currentOrder);
    totalDue += item.price;
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
