import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Popup({
  show,
  onClose,
  mode,
  vendor,
  onUpdate,
  onDelete,
  isActive,
  onToggleActive,
}) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (show) {
      setEditing(false);
      setInputValue(vendor);
    }
  }, [show, vendor]);

  const handleUpdateClick = () => {
    if (!editing) {
      setEditing(true);
    } else {
      onUpdate(inputValue);
      setEditing(false);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Vendor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode === "checkbox" && (
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Active"
              checked={isActive}
              onChange={onToggleActive}
            />
          </Form.Group>
        )}

        {editing ? (
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Vendor</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vendor name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Group>
        ) : (
          <p>
            <strong>Vendor:</strong> {vendor || "No vendor set"}
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {mode === "checkbox" && (
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        )}
        <Button
          variant={editing ? "primary" : "warning"}
          onClick={handleUpdateClick}
        >
          {editing ? "Save Update" : "Update"}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
