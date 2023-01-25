import React, { useState } from "react";
import Star from "./Star";

function Card() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <div>
      <main>
        <article className="card">
          <img src="./images/user.png" className="card--image" />
          <div className="card--info">
            <Star isFilled={contact.isFavorite} />

            <h2 className="card--name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Card;
