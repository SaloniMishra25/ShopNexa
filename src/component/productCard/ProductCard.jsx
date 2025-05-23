import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, title, description, price, image } = product;

  const handleOrder = () => {
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
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <img src={image} alt={title} className="product-img" />
        <div className="product-detail">
          <h3 className="product-name">{title}</h3>
          <p className="product-description">
            {description.slice(0, 60)}...
          </p>
          <p className="product-price">₹ {price}</p>
        </div>
      </Link>
      <div className="btn-group">
        <button onClick={() => addToCart(product)} className="add-btn">
          Add to Cart
        </button>
        <button onClick={handleOrder} className="order-btn">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
