import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
    background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
    color: "#fff",
    padding: "1.5rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    fontFamily: "Segoe UI, Arial, sans-serif",
};

const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    letterSpacing: "2px",
};

const navStyle = {
    display: "flex",
    gap: "1.5rem",
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    backgroundColor:"black",
    transition: "color 0.2s",
};

const Header = () => (
  <header style={headerStyle}>
    <div style={titleStyle}>My Dark App</div>
    <nav style={navStyle}>
      <Link to="/counter">
        <button style={linkStyle}>Counter</button>
      </Link>
      <Link to="/basicForm">
        <button style={linkStyle}>Form Link</button>
      </Link>
    </nav>
  </header>
);

export default Header;