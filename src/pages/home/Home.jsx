import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Fuse from "fuse.js";
import ProductCard from "../../component/productCard/ProductCard";
import "./Home.css";

const Home = () => {
  const { searchTerm } = useOutletContext();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    const term = searchTerm?.trim().toLowerCase();
    if (!term) {
      setFilteredProducts(products);
      return;
    }

    const fuse = new Fuse(products, {
      keys: ["title", "description", "category"],
      threshold: 0.3,
      includeScore: true,
    });

    const results = fuse.search(term);
    const matchedProducts = results.map((result) => result.item);
    setFilteredProducts(matchedProducts);
  }, [searchTerm, products]);

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
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
