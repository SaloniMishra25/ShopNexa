import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../../component/theme/ThemeToggle";
import "./Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    login(user);
    navigate("/home");
  };

  return (
    <div className="auth-page-container">
      <ThemeToggle />
      <div className="auth-card">
        <h1 className="auth-title">ShopNexa</h1>
        <h2 className="auth-subtitle">Create your account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="auth-button" type="submit">
            Sign Up
          </button>
        </form>
        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
