import React, { useState } from "react";

function Box(props) {
  //set style
  const style = {
    backgroundColor: props.on ? "pink" : "gray",
    border: "2px solid black",
  };

  return (
    <div className="box" style={style} onClick={() => props.toggle(props.id)}>
      {props.squareElement}
    </div>
  );
}

export default Box;
