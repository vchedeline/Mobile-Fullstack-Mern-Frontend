import { Routes, Route } from "react-router";
import Order from "../pages/Order";
import Menu from "../pages/Menu";
import SubMenu from "../pages/SubMenu";
import PastOrders from "../pages/PastOrders";
import { useState } from "react";
import { useEffect } from "react";

export default function Main() {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const URL = "https://cv-sei-mobile-fullstack-mern.herokuapp.com/";

  async function getMenu() {
    try {
      const response = await (await fetch(URL + "menu")).json();
      setMenu(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOrders() {
    try {
      const response = await (await fetch(URL + "orders")).json();
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

  useEffect(() => {
    getOrders();
    getMenu();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu/:id" element={<SubMenu menu={menu} />} />
        <Route path="/orders/:id" element={<Order orders={orders} />} />
        <Route path="/pastorders" element={<PastOrders orders={orders} />} />
      </Routes>
    </main>
  );
}
