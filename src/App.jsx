import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
// import Footer from "./pages/footer/Footer";
import ProductsWrapper from "./component/wrapper/ProductsWrapper";
import ProductDetails from "./pages/productPage/ProductDetails";
import Chatbot from "./component/chatbot/Chatbot";

import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "./context/ThemeContext";

const AppRoutes = () => (
  <Routes>
    {/* Public routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/" element={<Navigate to="/login" replace />} />

    {/* Private routes */}
    <Route element={<ProtectedRoute />}>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductsWrapper />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
    </Route>

    {/* Fallback */}

    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

const App = () => (
  <AuthProvider>
    <CartProvider>
      <ThemeProvider>
        <div className="app-container">
          <AppRoutes />
          {/* <Footer /> */}
          <Chatbot />
        </div>
        <ToastContainer position="top-right" />
      </ThemeProvider>
    </CartProvider>
  </AuthProvider>
);

export default App;
