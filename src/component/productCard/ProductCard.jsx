import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, description, price, image } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={name} className="product-img" />
        <div className="product-detail">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description.slice(0, 60)}...</p>
          <p className="product-price">₹ {price}</p>
        </div>
      </Link>
      <button onClick={() => onAddToCart(product)} className="add-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
