import React, { useState } from "react";

function DataToggleComponent() {
  const [showUploadedData, setShowUploadedData] = useState(false);

  const oldData = (
    <div>
      <h2>Old Data</h2>
      <p>This is the old data shown by default.</p>
    </div>
  );

  const uploadedData = (
    <div>
      <h2>Uploaded Data</h2>
      <p>This is the newly uploaded data.</p>
    </div>
  );

  const handleClick = () => {
    setShowUploadedData(true); // Show new data, hide old
  };

  return (
    <div>
      <button onClick={handleClick}>Upload </button>

      {showUploadedData ? uploadedData : oldData}
    </div>
  );
}

export default DataToggleComponent;
