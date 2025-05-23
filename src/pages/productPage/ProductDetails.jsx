import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import BackToHomeButton from "../../component/common/BackToHomeButton";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const handleOrder = () => {
    console.log("Order placed for", product.title);
    alert(`Order placed for: ${product.title}`);
    // navigate("/order-confirmation"); // Optional: redirect
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      <BackToHomeButton />
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">₹ {product.price}</p>
        <div className="btn-group">
          <button onClick={() => addToCart(product)} className="add-to-cart-btn">
            Add to Cart
          </button>
          <button onClick={handleOrder} className="order-btn">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
