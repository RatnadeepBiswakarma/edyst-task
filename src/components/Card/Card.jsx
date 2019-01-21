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
    {/* card header section */}
      <section className="card-header">
        <span style={{
          backgroundColor: card.cardColors.tagbg
        }} className="tag">{card.name}</span>
        <span className="arrow">→</span>
      </section>
      {/* card body section */}

      <section className="card-body">
      {/* body description component  */}
        <Description card={card} />
        {/* card image component */}
        <Sprite card={card} />
      </section>
    </div>
  );
};
export default Card;
