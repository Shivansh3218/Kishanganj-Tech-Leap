import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  let normalCount = 0;

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>This is a counter application</h1>
      <h1> this is the state {count}</h1>
      <h1> this is normal count {normalCount}</h1>
      <button onClick={() => setCount(count + 1)}>State Increment</button>

      <button onClick={() => {
        normalCount = normalCount + 1
        // normalCount+=1
        console.log(normalCount," this is not state"); 
      }}> Variable Increment</button>
      <br />
      <br />
      {/* <button onClick={() => setCount(count - 4)}>Decrement</button>

      <button onClick={decrement}>dec</button>

      <button onClick={decrement}>dec</button>

      <button onClick={decrement}>dec</button>

      <button onClick={decrement}>dec</button> */}
    </>
  );
}
export default App;

// STATE = > IS AN INTERNAL OBJECT OF A COMPONENT
// IT IS USED TO STORE DATA THAT CAN CHANGE OVER TIME OR IN RESPONSE TO USER ACTIONS
// WHEN STATE CHANGES, THE COMPONENT RE-RENDERS TO REFLECT THE UPDATED DATA
// usestate return an array with two elements, a value and a function to update that value

//event handlers
// onclick = { increment }  // this is an event handler
// onscroll = { handleScroll }  // this is an event handler
// onchange = { handleChange }  // this is an event handler

// Hooks =>> functions, that are used to copy the lifecycle methods of class components


// RE RENDERING
// when a component re renders, it means that the component is being re-evaluated and
// its output is being updated based on changes in state or props
// when a component re renders, react compares the new output with the previous output

// FOLDER STRUCTURE 
// public =>> index.html, assets like images, fonts, icons
// src =>> all the code files, components, styles, utils, services, hooks
// node_modules =>> all the dependencies and packages
// package.json =>> all the metadata about the project, scripts, dependencies
// vite.config.js =>> configuration file for vite


// VITE VS CRA
// VITE IS A BUILD TOOL THAT PROVIDES A FAST DEVELOPMENT ENVIRONMENT FOR MODERN WEB
// APPLICATIONS. IT USES ES MODULES AND BROWSER NATIVE IMPORTS TO PROVID

// NPM VS NPX VS YARN
// NPM =>> NODE PACKAGE MANAGER, IT IS USED TO MANAGE THE DEPEND
// NPX =>> NODE PACKAGE EXECUTOR, IT IS USED TO EXECUTE THE PACKAGES
// YARN =>> YET ANOTHER RESOURCE NEGOTIATOR, IT IS USED TO


// STRICT MODE
// STRICT MODE IS A TOOL FOR IDENTIFYING POTENTIAL PROBLEMS IN AN APPLICATION
// IT ACTIVATES ADDITIONAL CHECKS AND WARNINGS FOR ITS DESCENDANTS


// JSX =>> JAVASCRIPT XML, IT IS A SYNTAX EXTENSION FOR JAVASCRIPT


// USESTATE
// IT IS A HOOK THAT ALLOWS YOU TO ADD STATE TO FUNCTION COMPONENTS


// VARIABLES VS STATE
// VARIABLES ARE USED TO STORE DATA THAT DOES NOT CHANGE OVER TIME
// STATE IS USED TO STORE DATA THAT CAN CHANGE OVER TIME OR IN RESPONSE TO USER ACTIONS
// WHEN STATE CHANGES, THE COMPONENT RE-RENDERS TO REFLECT THE UPDATED DATA

// FUNCTION REUSE IN REACT
// you can reuse functions in react by defining them outside the componeNT or if we want to use them in a same compoenent we can define them before the return statement

