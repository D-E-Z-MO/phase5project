import React, { useState } from "react";
import "./FlipCard.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function FlipCard({
  content,
  flames,
  updateIcebreaker,
  icebreaker,
  seeIceBreakers,
  removeIntro,
  user,
  tags,
}) {
  const [modalShow, setModalShow] = useState(false);
  // const onClick = () => setModalShow(true);

  function ResponseModal({ icebreaker, user, onHide }) {
    return (
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
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
          <button variant="primary" onClick={() => setModalShow(true)}>
            Leave a response
          </button>
          <button className="primary" onClick={removeIntro}>
            Delete
          </button>
          {modalShow ? (
            <ResponseModal
              onHide={() => setModalShow(false)}
              icebreaker={icebreaker}
              user={user}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { FlipCard };
