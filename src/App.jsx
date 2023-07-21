import React, { useState } from "react";
import "./App.css";
//import Header from "./assets/component/Header";
//import Meme from "./assets/component/Meme";
import Thing from "./assets/component/Thing";
import Card from "./assets/component/Card";
import Count from "./assets/component/Count";
import Body from "./assets/component/Body";
import boxes from "./assets/component/boxes";
import Box from "./assets/component/Box";
import Joke from "./assets/component/Joke";

//function

function App() {
  const [squares, setSquares] = useState(boxes);

  //map through box data
  const squareElement = squares.map((square) => {
    return (
      <Box
        key={square.id}
        id={square.id}
        on={square.on}
        toggle={toggleOnandOff}
      />
    );
  });
  //toggle
  function toggleOnandOff(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });

    {
      /*
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = { ...currentSquare, on: !currentSquare.on };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  
  }
*/
    }

    return (
      <div className="app">
        {/*<Header />*/}
        {squareElement}
        {/*<Meme />*/}
      </div>
    );
  }
}
export default App;
