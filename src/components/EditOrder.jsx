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
        <p>User:</p>
        <input
          type="text"
          name="user"
          value={editForm.user}
          onChange={handleChange}
        />
        <p>Total:</p>
        <input
          type="text"
          name="total"
          value={editForm.total}
          onChange={handleChange}
        />
        <div>
          <p>Food Items:</p>
          <ul>
            {o.items.map((e, idx) => (
              <input type="text" name={e} value={e} onChange={handleChange} />
            ))}
          </ul>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
