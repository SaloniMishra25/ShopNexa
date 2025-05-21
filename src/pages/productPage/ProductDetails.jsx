import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">₹ {product.price}</p>

        {/* ✅ Working Add to Cart Button */}
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
