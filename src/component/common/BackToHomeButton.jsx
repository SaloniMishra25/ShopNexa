import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackToHomeButton.css";
const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate("/home")}>
      ⬅ Back to Home
    </button>
  );
};

export default BackToHomeButton;
