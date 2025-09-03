import React from "react";
import { Link } from "react-router-dom";
import Child from "./prop-drilling/Child";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import { ThemeContext } from "./contexts/ThemeContext";

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
  backgroundColor: "black",
  transition: "color 0.2s",
};

const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext);
  // console.log(theme, setTheme, " this is from header");

  return (
    <header style={{
      ...headerStyle,
      background: theme === "dark" ? "linear-gradient(90deg, #232526 0%, #414345 100%)" : "linear-gradient(90deg, #f5f5f5 0%, #e0e0e0 100%)",
      color: theme === "dark" ? "#fff" : "#000",
    }}>
      <div style={titleStyle}>My Dark App</div>
      <nav style={navStyle}>
        <Link to="/counter">
          <button style={linkStyle}>Counter</button>
        </Link>
        <Link to="/basicForm">
          <button style={linkStyle}>Form Link</button>
        </Link>
      </nav>
      <button onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";

      
        setTheme(newTheme);
       
      }}>
        Change Theme
      </button>
      {/* <Child /> */}
    </header>
  )
}

export default Header;