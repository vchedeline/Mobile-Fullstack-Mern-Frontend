export default function PastOrders({ orders }) {
  const allOrders = orders.map((o, idx) => {
    return (
      <div key={idx}>
        <h3>Order #{idx}</h3>
        <h4>User {o.user}</h4>
        <div>{o.items}</div>
        <div>Total: {o.total}</div>
      </div>
    );
  });

  return (
    <main>
      <h1>All Orders</h1>
      {allOrders}
    </main>
  );
}
