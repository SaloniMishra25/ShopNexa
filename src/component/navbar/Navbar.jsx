import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "../searchbar/SearchBar"; 
import "./Navbar.css";

const Navbar = ({ query, setQuery }) => {
  return (
    <nav className="nav">
      <Link to="/" className="brand">
        ShopNexa
      </Link>

      <SearchBar query={query} setQuery={setQuery} />

      <div className="links">
        <Link to="/cart" className="link">
          <FaShoppingCart className="icon" />
          Cart
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
