import React, { useState } from "react";

function Thing() {
  const [thing, setThing] = useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThing((prevThing) => [...prevThing, `Thing ${prevThing.length + 1}`]);
  }

  {
    /*
  const [isGoingOut, setIsGoingOut] = useState(true);

  function handleClick() {
    setIsGoingOut((old) => (old ? false : true));
  }
*/
  }
  //map through things array
  const thingsEl = thing.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="thing-container">
      <button onClick={addItem}>Add Item</button>
      <div>{thingsEl}</div>
      {/*
      <button onClick={handleClick}>Click Here</button>
      <h1>{isGoingOut ? "Yes" : "No"}</h1>
  */}
    </div>
  );
}
export default Thing;
