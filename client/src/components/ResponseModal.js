import React, { useEffect, useState, useCallback } from "react";
import ResponseForm from "./ResponseForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ResponseModal({
  id,
  icebreaker,
  seeIceBreakers,
  user,
  onHide,
  show,
}) {
  const [responseList, setResponseList] = useState([]);

  const handleFetchList = useCallback(() => {
    fetch(`/responses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setResponseList(data);
        console.log(data);
      });
  }, [id]);

  // get all responses
  useEffect(() => {
    handleFetchList();
  }, [handleFetchList]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {icebreaker}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Responses</h4>
        <div className="modal-body">
          {Array.from(responseList).map((resp) => (
            <ul key={resp.id}>
              <h4>
                {" "}
                <p>{resp.user.username}</p> responded with: {resp.response}
              </h4>
            </ul>
          ))}
        </div>
        <ResponseForm
          user={user}
          seeIceBreakers={seeIceBreakers}
          icebreaker={icebreaker}
          handleFetchList={handleFetchList}
          id={id}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
