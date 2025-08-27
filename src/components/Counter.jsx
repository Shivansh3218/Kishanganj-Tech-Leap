import React from 'react'
import { useState } from "react";

function Counter() {

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
  )
}

export default Counter