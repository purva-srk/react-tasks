import { useState } from "react";
import "./InputField.css";

const InputField = () => {
  const [data, setData] = useState();
  const [showButton, setShowButton] = useState("true");

  const nameChangeHandler = (event) => {
    setData(event.target.value);
  };

  const handleShowButton = () => {
    setShowButton("true");
  };

  const handleHideButton = () => {
    setShowButton("false");
  };

  return (
    <div>
      <label>Enter Name:</label>
      <input type="text" onChange={nameChangeHandler} />
      {showButton === "true" && <p>{data}</p>}
      {showButton === "false" && null}
      <br />
      <button onClick={handleShowButton}>Show</button>
      <button onClick={handleHideButton}>Hide</button>
    </div>
  );
};

export default InputField;
