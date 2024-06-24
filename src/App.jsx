import React, { useState } from 'react';
import './App.css'

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <p className="count-text">Count: {count}</p>
      <button className="counter-button" onClick={incrementCount}>Increment</button>
      <button className="counter-button" onClick={decrementCount}>Decrement</button>
      <button className="counter-button" onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterApp;
