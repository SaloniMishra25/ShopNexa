import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";
import SearchBar from "../searchbar/SearchBar";
import ThemeToggle from "../theme/ThemeToggle";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="brand">
        ShopNexa
      </Link>

      <SearchBar onSearch={onSearch} />

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link to="/home" className="link" onClick={() => setMenuOpen(false)}>
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/cart" className="link" onClick={() => setMenuOpen(false)}>
          <FaShoppingCart className="icon" /> Cart
        </Link>
        <Link to="/orders" className="link" onClick={() => setMenuOpen(false)}>
          <FaClipboardList className="icon" />
          Orders
        </Link>

        <Link to="/login" className="link" onClick={() => setMenuOpen(false)}>
          <FaSignOutAlt className="icon" />
          Logout
        </Link>
        <ThemeToggle
          className="theme-toggle"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
