import React from "react";

function Star(props) {
  const starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";
  return (
    <div>
      <h1>{props.starImg}</h1>
    </div>
  );
}

export default Star;
