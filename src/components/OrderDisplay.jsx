import { useNavigate } from "react-router";

export default function OrderDisplay({ o, idx, deleteOrder, setEdit }) {
  const navigate = useNavigate();

  function handleDelete(id) {
    deleteOrder(id);
    navigate("/pastorders");
  }

  function handleEdit() {
    setEdit(idx);
  }

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
}
