import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle-btn"
    >
      {theme === "light" ? (
        <>
          <FaMoon style={{ marginRight: "5px" }} /> Dark Mode
        </>
      ) : (
        <>
          <FaSun style={{ marginRight: "5px" }} /> Light Mode
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
