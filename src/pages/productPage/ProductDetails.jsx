import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CustomButton from "../../component/common/CustomButton";
import BackToHomeButton from "../../component/common/BackToHomeButton";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError("Failed to load product. Please try again.");
      });
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      <BackToHomeButton />
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">
            <span>&#8377;</span> {product.price}
          </p>
          <CustomButton product={product} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
