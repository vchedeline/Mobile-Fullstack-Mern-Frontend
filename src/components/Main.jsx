import { Routes, Route } from "react-router";
import Order from "../pages/Order";
import Menu from "../pages/Menu";
import { useState } from "react";

export default function Main() {
  const [orders, setOrders] = useState(null);
  const URL = "";

  async function getOrders() {
    try {
      const response = await (await fetch(URL)).json();
      setOrders(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function createOrder(order) {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(order),
    });
  }

  async function updateOrder(order, id) {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(order),
    });
  }

  async function deleteOrder(id) {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getOrders();
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/orders/:id" element={<Order />} />
      </Routes>
    </main>
  );
}
