import { useState } from "react";

import CounterApp from "./CounterApp";
import "./CloneCounter.css";

const CloneCounter = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const handleClick = (event) => {
    setCount(+count + 1);
    arr.push(count);
    // console.log(count);
    // console.log(arr);
  };

  return (
    <div>
      <button className="clone" onClick={handleClick}>
        Add New
      </button>
      {arr.map((item) => {
        return <CounterApp />;
      })}
    </div>
  );
};

export default CloneCounter;
