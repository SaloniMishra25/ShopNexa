import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productPage/ProductDetails";

function App() {
  const [query, setQuery] = useState("");
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />

        <Route
          path="/product/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
