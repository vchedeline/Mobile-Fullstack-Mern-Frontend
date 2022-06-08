import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function PastOrders({ orders, deleteOrder, getOrders }) {
  const navigate = useNavigate();

  function handleDelete(id) {
    deleteOrder(id);
    navigate("/pastorders");
  }

  function handleEdit() {}

  const allOrders = orders.map((o, idx) => {
    return (
      <div key={idx}>
        <h3>Order #{idx}</h3>
        <h4>User {o.user}</h4>
        <div>{o.items}</div>
        <div>Total: {o.total}</div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDelete(o._id)}>DELETE</button>
      </div>
    );
  });

  useEffect(() => {
    getOrders();
  }, []);

  const [display, setDisplay] = useState(allOrders);

  return (
    <main className="orders">
      <h1>All Orders</h1>
      {orders ? allOrders : <h1>Loading...</h1>}
    </main>
  );
}
