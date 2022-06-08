import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Order from "../pages/Order";
import Menu from "../pages/Menu";
import SubMenu from "../pages/SubMenu";
import PastOrders from "../pages/PastOrders";
import Login from "../pages/Login";
import { useState } from "react";
import { useEffect } from "react";

export default function Main() {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalDue, setTotalDue] = useState(0);
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
    await fetch(URL + "orders", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(order),
    });
  }

  async function updateOrder(order, id) {
    await fetch(URL + "orders/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(order),
    });
  }

  async function deleteOrder(id) {
    await fetch(URL + "orders/" + id, {
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
        <Route path="/" element={<Home setCurrentOrder={setCurrentOrder} />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/menu/:id"
          element={
            <SubMenu
              menu={menu}
              currentOrder={currentOrder}
              totalDue={totalDue}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Order
              currentOrder={currentOrder}
              setCurrentOrder={setCurrentOrder}
              totalDue={totalDue}
              setTotalDue={setTotalDue}
              createOrder={createOrder}
            />
          }
        />
        <Route
          path="/pastorders"
          element={
            <PastOrders
              orders={orders}
              deleteOrder={deleteOrder}
              getOrders={getOrders}
              updateOrder={updateOrder}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}
