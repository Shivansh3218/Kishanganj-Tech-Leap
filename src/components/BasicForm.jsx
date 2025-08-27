import React, { useState } from "react";
import Header from "./Header";

function BasicForm() {
  const [name, setName] = useState("");
  let [finalName, setFinalName] = useState("");
  let submit = (e) => {
    e.preventDefault();
    setName(finalName);
  };

  console.log(name, name.length);
  return (
    <>
      {/* <Header/> */}
      {/* // REACT FRAGMENT  = > key manage */}
      <form>
        <label htmlFor="name">Enter Your Name</label>
        <br />
        <br />
        <input
          type="text"
          id="name"
          value={finalName}
          placeholder="Enter your name"
          onChange={(event) => {
            // console.log(finalName, "<<<<<<<<<<<<<<<<<<<THIS IS THE FINAL NAME")
            // console.log(event);
            // finalName += event.target.value;
            setFinalName(event.target.value);
          }} // event handler
        />
        <br />
        <br />
        <button onClick={submit} type="submit">
          Submit
        </button>
      </form>
      <br />
      <br />
      <p>{name}</p>
      {name.length > 0 ? (
        <div>
          {name === "Shivansh" ? (
            <p>You are a teacher</p>
          ) : (
            <p>This is the student</p>
          )}
        </div>
      ) : null}
    </>
  );
}

export default BasicForm;
