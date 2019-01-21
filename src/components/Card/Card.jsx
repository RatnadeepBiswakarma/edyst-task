import React from "react";

const Card = props => {
  let card = props.card;
  return (
    <div className="card-container">
      <section className="card-header">
        <p className="tag-name">{card.name}</p>
      </section>
      <section className="card-body">
      <div className="description">
      <p className="info">{card.description}</p>
      </div>
      </section>
    </div>
  );
};
export default Card;
