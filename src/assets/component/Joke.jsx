import React, { useState } from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  //toggle button
  const toggle = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button className="btn" onClick={toggle}>
        {isShown ? "Hide" : "Show"} Punch line
      </button>
    </div>
  );
};

export default Joke;
