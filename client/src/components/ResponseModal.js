import React from "react";
import ResponseForm from "./ResponseForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ResponseModal({ icebreaker, user, onHide }) {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <ResponseForm icebreaker={icebreaker} user={user} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
