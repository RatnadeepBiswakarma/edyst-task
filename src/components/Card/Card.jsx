import React from "react";
import "./Card-Style.css";
import Sprite from './Sprite/Sprite'

const Card = props => {
  let card = props.card;
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
        <Sprite card={card} />
      </section>
    </div>
  );
};
export default Card;
