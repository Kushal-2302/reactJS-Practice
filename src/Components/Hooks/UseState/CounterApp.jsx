import React, { useState } from "react";
import "./hooks.css";

const CounterApp = () => {
  let [count, setCount] = useState(0);
  let handleInc = () => {
    setCount(count + 1);
  };
  let handleDec = () => {
    if (count <= 0) {
      alert("Negative values is not possible");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="hooks counter-app">
      <h1>Counter App</h1>
      <div className="count">
        <button onClick={handleDec}>Decrement (-)</button>
        <h2>{count}</h2>
        <button onClick={handleInc}>Increment (+)</button>
      </div>
    </div>
  );
};

export default CounterApp;
