import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PopupModal = ({
  show,
  onClose,
  mode,
  onUpdate,
  onDelete,
  isActive,
  onToggleActive,
}) => {
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Vendor Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode === "checkbox" && (
          <Form.Group className="mb-3">
            <div>
              <label>vender</label>
              <input type="text" placeholder="Enter" />
            </div>
            <Form.Check
              type="checkbox"
              label="Active"
              checked={isActive}
              onChange={onToggleActive}
            />
          </Form.Group>
        )}
        <p>
          This is a modal for: <strong>{mode}</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {mode === "checkbox" && (
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        )}
        <Button variant="warning" onClick={onUpdate}>
          Update
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
