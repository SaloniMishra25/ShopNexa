import React, { useEffect, useState } from "react";
import "./Home.css";

import ProductCard from "../../component/productCard/ProductCard";

const Home = ({ query }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const onAddToCart = (product) => {
    console.log("Added to cart : ", product);
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to ShopNexa</h1>
        <p>Discover unique products, not just another marketplace.</p>
      </section>

      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.title,
                  description: product.description,
                  price: product.price,
                  image: product.image,
                }}
                onAddToCart={onAddToCart}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
