
import React from "react";
import Footer from "../pages/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
