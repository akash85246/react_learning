import React from "react";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  function inc() {
    setNum(num + 1);
  }
  function dec() {
    setNum1(num1 - 1);
  }

  return (
    <div className="container">
      <h1>{num}</h1>
      <button onClick={inc}>+</button>
      <h1>{num1}</h1>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
