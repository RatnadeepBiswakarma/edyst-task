import React from "react";

const Content = props => {
  let card = props.card;
  return (
    <div style={{
        backgroundColor: card.cardColors.tagbg
    }} className="card-content">
      <div className="description">
      <h3 className="name">{card.name}</h3>
        <p className="info">{card.description}</p>
      </div>
    </div>
  );
};

export default Content;
