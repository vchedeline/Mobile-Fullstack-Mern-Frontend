import { useState } from "react";

export default function EditOrder({ o, idx, setEdit, updateOrder, getOrders }) {
  const [editForm, setEditForm] = useState(o);

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
      <h3>Order #{idx}</h3>
      <form onSubmit={handleSubmit}>
        User:
        <input
          type="text"
          name="user"
          value={editForm.user}
          onChange={handleChange}
        />
        Total:
        <input
          type="text"
          name="total"
          value={editForm.total}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{o.items}</div>
    </div>
  );
}
