import React from "react";
import { memesData } from "./memesData.js";

function Meme() {
  function handleClick() {
    console.log("Button is clicked");
  }
  function getMemeImg() {
    const memesArray = memesData;
  }
  return (
    <div className="meme-container">
      <div className="wrapper">
        <div className="meme-content">
          <form className="form">
            <input type="text" placeholder="Top text..." />
            <input type="text" placeholder="Bottom text..." />
          </form>
          <button className="btn" onClick={handleClick}>
            Get new meme image 😉
          </button>
        </div>
        <div className="result-container">memes goes here</div>
      </div>
    </div>
  );
}

export default Meme;
