import React from "react";
import "./Card-Style.css";

const Card = props => {
  let card = props.card;
  let cardStyle = {
    color: card.text,
    backgroundColor: card.bg
  };
  return (
    <div
      style={{
        backgroundColor: card.cardColors.bg
      }}
      className="card-container"
    >
      <section className="card-header">
        <p className="tag">{card.name}</p>
      </section>
      <section className="card-body">
        <h3 className="name">{card.name}</h3>
        <div className="description">
          <p className="info">{card.description}</p>
        </div>
        <div className="photo-container">
          <img src={card.sprite} alt="Pokemon" />
        </div>
      </section>
    </div>
  );
};
export default Card;
