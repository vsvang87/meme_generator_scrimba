import React, { useState } from "react";
import "./App.css";
import Header from "./assets/component/Header";
import Meme from "./assets/component/Meme";
import Thing from "./assets/component/Thing";
import Card from "./assets/component/Card";
import Count from "./assets/component/Count";
import Body from "./assets/component/Body";
import boxes from "./assets/component/boxes";
import Box from "./assets/component/Box";

//function
function App(props) {
  const [squares, setSquares] = useState(boxes);
  //style css
  const style = {
    backgroundColor: props.darkMode ? "lightgray" : "black",
    border: "2px solid black",
  };

  const boxElement = boxes.map((box) => (
    <div className="box" key={box.id} style={style}></div>
  ));

  return (
    <div className="App">
      <Header />

      <Meme />
      <Box on={boxes} />
    </div>
  );
}

export default App;
