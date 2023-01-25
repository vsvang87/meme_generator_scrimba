import React from "react";

function Header(props) {
  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="header-content">
          <h1>😃 Meme Generator</h1>
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default Header;
