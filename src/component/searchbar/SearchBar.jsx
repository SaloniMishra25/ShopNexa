import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
