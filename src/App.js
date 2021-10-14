import React, { useState, useRef } from "react";
import './App.css';

function App() {


  const [name, setName] = useState("");
  const inputElement = useRef("");
  console.log(inputElement)
  const resetInput = () =>{
    setName("");
    inputElement.current.focus();
  };
  return (
    <div className="App">
    <div>
      <input 
      ref={inputElement}
      name="name"
      autoComplete="off"
      type="text"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <button onClick={resetInput}>Reset</button>
    </div>
    <div>My name is {name}</div>
    </div>
  );
}

export default App;
