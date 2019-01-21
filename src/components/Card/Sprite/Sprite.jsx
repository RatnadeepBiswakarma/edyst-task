import React from "react";

const Sprite = props => {
    let card = props.card;
  return (
    <div className="photo-container">
      <img src={card.sprite} alt="Pokemon" />
    </div>
  );
};
export default Sprite;
