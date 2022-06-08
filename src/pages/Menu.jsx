import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main>
      <h1>Chedou's Fast Foods</h1>
      <div className="food-group">
        <Link to={"/menu/Breakfast"}>Breakfast Items</Link>
      </div>
      <div className="food-group">
        <Link to={"/menu/Hamburger"}>Burger Items</Link>
      </div>
      <div className="food-group">
        <Link to={"/menu/Chicken"}>Chicken Items</Link>
      </div>
      <div className="food-group">
        <Link to={"/menu/Side"}>Side Items</Link>
      </div>
      <div className="food-group">
        <Link to={"/menu/Drink"}>Drink Items</Link>
      </div>
      <div className="food-group">
        <Link to={"/menu/Dessert"}>Dessert Items</Link>
      </div>
    </main>
  );
}
