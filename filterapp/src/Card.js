import React from "react";

function Card({ allcards }) {
  const cards = allcards.map((card) => {
    return (
      <div className="card-container" key={card.id}>
        <img src={card.img} alt="" />
        <div className="card-details">
          <h2>{card.title}</h2>
          <p>{card.desc}</p>
        </div>
      </div>
    );
  });
  return <div className="all-cards">{cards}</div>;
}

export default Card;
