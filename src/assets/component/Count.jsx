import React, { useState } from "react";
import Count2 from "./Count2";

function Count({ number }) {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <button onClick={add}>+</button>
      <Count2 number={count} />
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default Count;
