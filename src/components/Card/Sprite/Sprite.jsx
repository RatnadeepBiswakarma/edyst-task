import React from "react";

const Sprite = props => {
  let card = props.card;
  let cardColors = card.cardColors;
  return (
    <div className="photo-container">
      <img
        style={{
          backgroundColor: card.cardColors.imgbg
        }}
        src={card.sprite}
        alt="Pokemon"
      />
    </div>
  );
};
export default Sprite;
