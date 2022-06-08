import { useNavigate } from "react-router";

export default function Order({
  currentOrder,
  setCurrentOrder,
  totalDue,
  setTotalDue,
  createOrder,
}) {
  const navigate = useNavigate();

  function checkoutButton(evt) {
    console.log("Checkout Clicked");
    let itemsList = [];
    currentOrder.forEach((ele) => {
      itemsList.push(ele.name);
    });
    let newOrder = {
      user: "Employee",
      items: itemsList,
      total: totalDue,
    };
    createOrder(newOrder);
    setCurrentOrder([]);
    setTotalDue(0);
    navigate("/pastorders");
  }

  function removeItem(idx) {
    console.log("Removing at index" + idx);
    console.log("Current Order Before" + currentOrder);
    console.log("Current Order After" + currentOrder);
  }

  function displayList() {
    return currentOrder.map((ele, idx) => {
      return (
        <div key={idx}>
          <h1>{ele.name}</h1>
          <p>Total: {ele.price}</p>
          <button onClick={() => removeItem(idx)}>REMOVE</button>
        </div>
      );
    });
  }

  return (
    <div className="checkout">
      <h1>Current Order</h1>
      <div>
        <h2>Total Due: {totalDue}</h2>
        <button onClick={checkoutButton}>CHECKOUT</button>
      </div>
      {displayList()}
    </div>
  );
}
