import React from "react";

function Star(props) {
  const starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";
  return (
    <div>
      <img
        src={`../image/${starIcon}`}
        className="card--favorite"
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Star;
