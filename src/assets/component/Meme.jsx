import React, { useState } from "react";
import memesData from "./memesData";

function Meme() {
  //set state
  const [memeImage, setMemeImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }
  return (
    <div className="meme-container">
      <div className="wrapper">
        <div className="meme-content">
          <form className="form">
            <input type="text" placeholder="Top text..." />
            <input type="text" placeholder="Bottom text..." />
          </form>
          <button className="btn" onClick={getMemeImage}>
            Get new meme image 😉
          </button>
        </div>
        <div className="result-container">
          <img src={meme.randomImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Meme;
