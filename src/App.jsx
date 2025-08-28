import "./App.css";
import { Routes, Router, Route, Link } from "react-router-dom";
import BasicForm from "./components/BasicForm";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import Header from "./components/Header";
import AdvancedForm from "./components/AdvancedForm";
import BasicApiCall from "./components/BasicApiCall";
function App() {
  return (
    <>
      {/* <h1>This is the main route </h1>
      <h2>For counter you can go to /counter route</h2>
      <a href="/counter">counter</a>
      <h2>For Basic Form you can go to /basicForm route</h2>
      <a href="/basicForm"> basicForm</a> */}

      {/* <a href="https://github.com/Shivansh3218/Kishanganj-Tech-Leap.git">Kishanganj Tech Leap Notes</a> */}

      <Header />
      <Routes>
        <Route path="/basicForm" element={<BasicForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/AdvancedForm" element={<AdvancedForm />} />
        <Route path="/api" element = {<BasicApiCall/>}/>
      </Routes>
    </>
  );
}
export default App;




