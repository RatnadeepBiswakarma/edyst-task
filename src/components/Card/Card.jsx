import React from "react";
import "./Card-Style.css";
import Sprite from "./Sprite/Sprite";
import Description from "./Description/Description";

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
        <Description card={card} />
        <Sprite card={card} />
      </section>
    </div>
  );
};
export default Card;
