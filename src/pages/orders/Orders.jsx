import React, { useEffect, useState } from "react";
import BackToHomeButton from "../../component/common/BackToHomeButton";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);

    storedOrders.forEach((order) => {
      if (order.status === "Pending") {
        setTimeout(() => {
          updateOrderStatus(order.id, "Delivered");
        }, 5000);
      }
    });
  }, []);

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) => {
      const updated = prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      );
      localStorage.setItem("orders", JSON.stringify(updated));
      return updated;
    });
  };

  const cancelOrder = (id) => {
    const updated = orders.filter((order) => order.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // New function to cancel all orders
  const cancelAllOrders = () => {
    setOrders([]);
    localStorage.setItem("orders", JSON.stringify([]));
  };

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="orders-page">
      <BackToHomeButton />
      <h2>Your Orders</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Delivered")}>Delivered</button>
      </div>

      {/* Cancel All Orders Button */}
      {orders.length > 0 && (
        <button className="cancel-all-btn" onClick={cancelAllOrders}>
          Cancel All Orders
        </button>
      )}

      {filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-list">
          {filteredOrders.map((order) => (
            <div key={order.id} className="order-card">
              <img src={order.product.image} alt={order.product.title} />
              <div>
                <h4>{order.product.title}</h4>
                <p>₹{order.product.price}</p>
                <span
                  className={`order-status ${
                    order.status === "Pending"
                      ? "status-pending"
                      : "status-delivered"
                  }`}
                >
                  {order.status}
                </span>
                <p>Ordered on: {order.date}</p>
                {order.status === "Pending" && (
                  <button onClick={() => cancelOrder(order.id)}>Cancel</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
