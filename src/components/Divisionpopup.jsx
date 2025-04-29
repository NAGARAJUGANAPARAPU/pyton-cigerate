// import React, { useState } from "react";
// import {  Button } from 'react-bootstrap';

// const DivisionPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [division, setDivision] = useState("");
//   const [accountDr, setAccountDr] = useState("");
//   const [accountCr, setAccountCr] = useState("");
//   const [message, setMessage] = useState("");

//   const handleUpdate = () => {
//     if (division && accountDr && accountCr) {
//       setMessage("Update Complete");
//     } else {
//         setMessage("Please fill all fields");
//         setUpdatedData(null);

//     }
//   };

//   const handleClose = () => {
//     setShowPopup(false);
//     setMessage("");
//     setDivision("");
//     setAccountDr("");
//     setAccountCr("");
//   };

//   return (
//     <div className="p-4">
//       <button
//         className="primary"
//         onClick={() => setShowPopup(true)}
//       >
//         Show Popup
//       </button>

//       {showPopup && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Division</h2>

//             <div className="mb-2">
//               <label className="block text-sm font-medium">Division Name</label>
//               <input
//                 type="text"
//                 value={division}
//                 onChange={(e) => setDivision(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div className="mb-2">
//               <label className="block text-sm font-medium">Account DR</label>
//               <input
//                 type="text"
//                 value={accountDr}
//                 onChange={(e) => setAccountDr(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium">Account CR</label>
//               <input
//                 type="text"
//                 value={accountCr}
//                 onChange={(e) => setAccountCr(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             {message && <p className="text-green-600 mb-2">{message}</p>}

//             <div className="flex justify-end gap-2">
//               <button
//                 className="primary"
//                 onClick={handleUpdate}
//               >
//                 Update
//               </button>
//               <button
//                 className="secondary"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DivisionPopup;
import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const DivisionPopup = () => {
  const [show, setShow] = useState(false);
  const [division, setDivision] = useState("");
  const [accountDr, setAccountDr] = useState("");
  const [accountCr, setAccountCr] = useState("");
  const [message, setMessage] = useState("");
  const [updatedData, setUpdatedData] = useState(null);

  const handleUpdate = () => {
    if (division && accountDr && accountCr) {
      setUpdatedData({ division, accountDr, accountCr });
      setMessage("Update Complete");
    } else {
      setMessage("Please fill all fields");
      setUpdatedData(null);
    }
  };

  const handleClose = () => {
    setShow(false);
    setMessage("");
    setDivision("");
    setAccountDr("");
    setAccountCr("");
    setUpdatedData(null);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Show Popup
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Division</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ✅ Show Updated Data */}
          {updatedData && (
            <div className="mb-3">
              <Alert variant="info">
                <div>
                  <strong>Division:</strong> {updatedData.division}
                </div>
                <div>
                  <strong>Account DR:</strong> {updatedData.accountDr}
                </div>
                <div>
                  <strong>Account CR:</strong> {updatedData.accountCr}
                </div>
              </Alert>
            </div>
          )}

          <Form>
            <Form.Group controlId="divisionName">
              {/* <Form.Label>Division Name</Form.Label> */}
              <Form.Control
                type="text"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                placeholder="Enter division name"
              />
            </Form.Group>

            <Form.Group controlId="accountDr">
              {/* <Form.Label>Account DR</Form.Label> */}
              <Form.Control
                type="text"
                value={accountDr}
                onChange={(e) => setAccountDr(e.target.value)}
                placeholder="Enter account DR"
              />
            </Form.Group>

            <Form.Group controlId="accountCr">
              {/* <Form.Label>Account CR</Form.Label> */}
              <Form.Control
                type="text"
                value={accountCr}
                onChange={(e) => setAccountCr(e.target.value)}
                placeholder="Enter account CR"
              />
            </Form.Group>
          </Form>

          {message && (
            <Alert
              variant={updatedData ? "success" : "danger"}
              className="mt-3"
            >
              {message}
            </Alert>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DivisionPopup;
