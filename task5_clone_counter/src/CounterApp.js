import { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  let [number, setNumber] = useState(0);

  const handleNumberInput = (event) => {
    setNumber(event.target.value);
  };

  const handleDecrement = () => {
    setNumber(+number - 1);
  };

  const handleIncrement = () => {
    setNumber(+number + 1);
  };

  return (
    <div className="card">
      <h2>Counter App</h2>
      <button className="counter" onClick={handleDecrement}>
        -
      </button>
      <input type="number" value={number} onChange={handleNumberInput} />
      <button className="counter" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CounterApp;
