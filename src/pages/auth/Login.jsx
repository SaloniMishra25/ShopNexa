import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../../component/theme/ThemeToggle";
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warn("Please enter both email and password");
      return;
    }

    login(email);
    toast.success("Logged in successfully!");
    navigate("/home");
  };

  return (
    <div className="auth-container">
       <div className="theme-toggle-wrapper" style={{ textAlign: "right" }}>
        <ThemeToggle />
      </div>

      <div className="auth-card">
        <h1 className="auth-brand">ShopNexa</h1>
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          New here?{" "}
          <Link className="auth-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
