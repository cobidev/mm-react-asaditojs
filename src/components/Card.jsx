import React from "react";
import Button from "./Button";

const Card = ({ gifUrl, getRandomGifUrl, addFavoriteGif }) => (
  <div className="card">
    {!gifUrl ? (
      <p className="subtitle">
        <span className="emoji" role="img" aria-label="Cat">
          🐈
        </span>
      </p>
    ) : (
      <img className="margin-bottom" src={gifUrl} alt="Cat" />
    )}

    <div className="button-wrapper">
      <Button icon="🎲" onClick={getRandomGifUrl} />
      <Button icon="⭐️" onClick={addFavoriteGif} />
    </div>
  </div>
);

export default Card;
