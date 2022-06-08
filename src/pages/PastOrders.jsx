import { useEffect, useState } from "react";
import OrderDisplay from "../components/OrderDisplay";
import EditOrder from "../components/EditOrder";

export default function PastOrders({ orders, deleteOrder, getOrders }) {
  const [edit, setEdit] = useState(false);
  const allOrders = orders.map((o, idx) => {
    if (edit) {
      return <EditOrder o={o} idx={idx} setEdit={setEdit} key={idx} />;
    } else {
      return (
        <OrderDisplay
          o={o}
          idx={idx}
          deleteOrder={deleteOrder}
          setEdit={setEdit}
          key={idx}
        />
      );
    }
  });

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <main className="orders">
      <h1>All Orders</h1>
      {orders ? allOrders : <h1>Loading...</h1>}
    </main>
  );
}
