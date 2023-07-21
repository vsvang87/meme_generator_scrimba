import React, { useState, useEffect } from "react";

function Meme() {
  //set state
  const [memeImage, setMemeImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  //get random memes
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  //on change handler
  function changeHandler(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-container">
      <div className="wrapper">
        <div className="meme-content">
          <form className="form">
            <input
              type="text"
              placeholder="Top text..."
              name="topText"
              value={meme.topText}
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Bottom text..."
              name="bottomText"
              value={meme.bottomText}
              onChange={changeHandler}
            />
          </form>
          <button className="btn" onClick={getMemeImage}>
            Get new meme image 😉
          </button>
        </div>
        <div className="result-container">
          <img src={meme.randomImage} alt="" />
          <h2 className="meme-text text-top">{meme.topText}</h2>
          <h2 className="meme-text text-bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Meme;
