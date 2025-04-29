

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Popup from "./Popup";

function ParentComponent() {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState(""); // "basic" or "checkbox"
  const [vendor, setVendor] = useState("Acme Corp");
  const [isActive, setIsActive] = useState(true);

  const openModal = (mode) => {
    setModalMode(mode);
    setShowModal(true);
  };

  const handleUpdate = (updatedName) => {
    setVendor(updatedName);
    alert("Vendor updated to: " + updatedName);
  };

  const handleDelete = () => {
    setVendor("");
    alert("Vendor deleted");
  };

  const handleClose = () => setShowModal(false);
  const toggleActive = () => setIsActive(!isActive);

  return (
    <div className="p-4">
      <Button
        variant="primary"
        onClick={() => openModal("basic")}
        className="me-3"
      >
        Open Update + Close Modal
      </Button>
      <Button variant="success" onClick={() => openModal("checkbox")}>
        Open Checkbox 
      </Button>

      <Popup
        show={showModal}
         onClose={handleClose}
        mode={modalMode}
        vendor={vendor}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        isActive={isActive}
        onToggleActive={toggleActive}
      />
    </div>
  );
}

export default ParentComponent;
