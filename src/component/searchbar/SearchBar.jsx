import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);  
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={inputValue}
        onChange={handleChange}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
