import { useEffect, useState } from "react";
import OrderDisplay from "../components/OrderDisplay";
import EditOrder from "../components/EditOrder";

export default function PastOrders({
  orders,
  deleteOrder,
  getOrders,
  updateOrder,
}) {
  const [edit, setEdit] = useState(false);
  const allOrders = orders.map((o, idx) => {
    if (edit === idx) {
      return (
        <EditOrder
          o={o}
          idx={idx}
          updateOrder={updateOrder}
          setEdit={setEdit}
          getOrders={getOrders}
          key={idx}
        />
      );
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="orders">
      <h1>All Orders</h1>
      {orders ? allOrders : <h1>Loading...</h1>}
    </main>
  );
}
