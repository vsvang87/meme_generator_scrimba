import React, { useState, useEffect } from "react";

function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    //cleaning up
    return function () {
      console.log("Cleaning up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
}

export default WindowTracker;
