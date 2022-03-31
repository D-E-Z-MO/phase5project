import React, { useState } from "react";
import "./FlipCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function IceCard({
  content,
  flames,
  id,
  updateIcebreaker,
  seeIceBreakers,
  removeIntro,
  user,
  tags,
}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>Flip a card to see the intro</h2>
          <h3> Topics: {tags}</h3>
        </div>
        <div className="flip-card-back">
          <h2>Type: {tags}</h2>
          <p>{content}</p>
          <p>🔥 : {flames}</p>
          <button className="primary" onClick={updateIcebreaker}>
            Add flame
          </button>
          <button className="primary" onClick={removeIntro}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { IceCard };
