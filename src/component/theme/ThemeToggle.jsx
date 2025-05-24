import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-toggle-btn ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
    </button>
  );
};

export default ThemeToggle;
