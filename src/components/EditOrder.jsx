import OrderDisplay from "./OrderDisplay";

export default function EditOrder({ o, idx, setEdit }) {
  function handleSubmit() {
    setEdit(false);
  }

  return (
    <div key={idx}>
      <h3>Order #{idx}</h3>
      <h4>User {o.user}</h4>
      <div>{o.items}</div>
      <div>Total: {o.total}</div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
