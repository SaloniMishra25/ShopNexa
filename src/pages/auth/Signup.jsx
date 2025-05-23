import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import './Auth.css';


const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.warn("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    signup(email);
    toast.success("Signed up successfully!");
    navigate("/home");
  };

  return (
    <div className="auth-container">
         <div className="theme-toggle-wrapper" style={{ textAlign: "right" }}>
        <ThemeToggle />
      </div>
      <div className="auth-card">
        <h1 className="auth-brand">ShopNexa</h1>
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="auth-link" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
