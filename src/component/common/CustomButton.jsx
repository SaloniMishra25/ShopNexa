import React from "react";
import "./CustomButton.css";

const CustomButton = ({ product, addToCart }) => {
  const saveOrder = (product) => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: Date.now(),
      product,
      status: "Pending",
      date: new Date().toLocaleString(),
    };
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));
    alert("Order placed successfully!");
  };

  return (
    <div className="btn-group">
      <button onClick={() => addToCart(product)} className="add-btn">
        Add to Cart
      </button>
      <button onClick={() => saveOrder(product)} className="order-btn">
        Order Now
      </button>
    </div>
  );
};

export default CustomButton;
