import React, { useState } from "react";
import "./FlipCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponseModal from "./ResponseModal";

function FlipCard({
  content,
  flames,
  id,
  updateIcebreaker,
  seeIceBreakers,
  removeIntro,
  user,
  tags,
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>Flip a card to see the intro</h2>
          <h3>
            {" "}
            Topics: <p>{tags}</p>
          </h3>
        </div>
        <div className="flip-card-back">
          <h2>Type: {tags}</h2>
          <p>{content}</p>
          <p>🔥 : {flames}</p>
          <button className="primary" onClick={updateIcebreaker}>
            Add flame
          </button>
          <button variant="primary" onClick={() => setModalShow(true)}>
            Leave a response
          </button>
          <ResponseModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            icebreaker={content}
            user={user}
            id={id}
            seeIceBreakers={seeIceBreakers}
          />
        </div>
      </div>
    </div>
  );
}

export { FlipCard };
