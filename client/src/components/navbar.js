import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../css/navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar-logo">cloudBlock</div>
      <div className="navbar-buttons">
        <Link
            to="/blocks"
            className={`navbar-button ${
                location.pathname === "/blocks" ? "active" : ""
            }`}
        >
          Blocks
        </Link>
        <Link
            to="/console"
            className={`navbar-button ${
                location.pathname === "/console" ? "active" : ""
            }`}
        >
          Console
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
