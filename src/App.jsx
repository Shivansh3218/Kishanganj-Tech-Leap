import "./App.css";
import { Routes, Router, Route, Link } from "react-router-dom";
import BasicForm from "./components/BasicForm";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import Header from "./components/Header";
import AdvancedForm from "./components/AdvancedForm";
import BasicApiCall from "./components/BasicApiCall";
import Grandparent from "./components/prop-drilling/Grandparent";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./components/contexts/DataContext";
import Child from "./components/prop-drilling/Child";
import { ThemeContext } from "./components/contexts/ThemeContext";
function App() {
  const { data, setData, addContact } = useContext(DataContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? "#121212" : "#f5f5f5";

  
  return (
    <div className="App" style={{
      background: bgColor,
      height: "100vh",
    }}>


      {/* <button onClick={() => setData("New Data")}>Change Data</button> */}


      <Header />
      <Routes>
        <Route path="/basicForm" element={<BasicForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/AdvancedForm" element={<AdvancedForm />} />
        <Route path="/api" element={<BasicApiCall />} />
      </Routes>
      <h1>Hello</h1>
    </div>
  );
}
export default App;




