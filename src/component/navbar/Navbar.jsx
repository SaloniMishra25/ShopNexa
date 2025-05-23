import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import SearchBar from "../searchbar/SearchBar";
import ThemeToggle from "../theme/ThemeToggle";
import { ThemeContext } from "../../context/ThemeContext";  
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav">
      <Link to="/" className="brand">
        ShopNexa
      </Link>

      <SearchBar onSearch={onSearch} />

      <div className="links">
        <Link to="/orders" className="link">
          Orders
        </Link>

        <Link to="/cart" className="link">
          <FaShoppingCart className="icon" />
          Cart
        </Link>

       <ThemeToggle />
        <Link to="/login" className="link">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
