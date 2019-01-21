import React from "react";

const Content = props => {
  let card = props.card;
  return (
    <div className="card-content">
      <h3 className="name">{card.name}</h3>
      <div className="description">
        <p className="info">{card.description}</p>
      </div>
    </div>
  );
};

export default Content;
