import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CustomButton from "../common/CustomButton";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, title, description, price, image } = product;

  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <img src={image} alt={title} className="product-img" />
        <div className="product-detail">
          <h3 className="product-name">{title}</h3>
          <p className="product-description">{description.slice(0, 60)}...</p>
          <p className="product-price">₹ {price}</p>
        </div>
      </Link>
      <CustomButton product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductCard;
