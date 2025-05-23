import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../component/navbar/Navbar";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Outlet context={{ searchTerm }} />
    </>
  );
};

export default ProtectedRoute;
