import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header-wrapper">
      <Link to="/" className="header-link">Home</Link>
      <div>
        <Link to="/signup" className="header-link">
          Sign up
        </Link>
        <Link to="/login" className="header-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
