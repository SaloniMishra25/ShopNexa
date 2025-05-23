import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./ProductsWrapper.css";

const ProductsWrapper = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-card-wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsWrapper;
