import { useState } from "react";
import { useNavigate } from "react-router";

export default function EditOrder({ o, idx, setEdit, updateOrder, getOrders }) {
  const [editForm, setEditForm] = useState(o);
  const navigate = useNavigate();

  function handleChange(evt) {
    setEditForm((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    updateOrder(editForm, o._id);
    setEdit(false);
    getOrders();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={editForm.user}
          onChange={handleChange}
          placeholder="user"
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Order #{idx}</h3>
      <h4>User {o.user}</h4>
      <div>{o.items}</div>
      <div>Total: {o.total}</div>
    </div>
  );
}
