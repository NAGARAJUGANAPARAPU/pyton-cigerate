// import React from "react";

// const Button = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <input type="file" />
//         </div>
//         <div>
//           <button disabled>upload</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Button;

// import React, { useState } from "react";

// const UploadComponent = () => {
//   const [file, setFile] = useState(null);

//   const handleUpload = () => {
//     if (!file) return;
//     console.log("Uploading:", file);
//     // Upload logic here
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload} disabled={!file}>
//         Upload
//       </button>
//     </div>
//   );
// };

// export default UploadComponent;
// import React, { useState } from 'react';

// const UploadComponent = () => {
//   const [file, setFile] = useState(null);

//   const handleUpload = () => {
//     if (!file) return;

//     // console.log('Uploading:', file);
//     // Here you'd typically send the file to the server

//     alert('✅ Upload successful!');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload} disabled={!file} style={{ marginLeft: '10px' }}>
//         Upload
//       </button>
//     </div>
//   );
// };

// export default UploadComponent;

// import React, { useState } from "react";

// const UploadComponent = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");

//   const allowedExtensions = [".xlsx", ".cgs"];

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//       const extension = selectedFile.name
//         .substring(selectedFile.name.lastIndexOf("."))
//         .toLowerCase();

//       if (!allowedExtensions.includes(extension)) {
//         setError("❌ Error: Only .xlsx and .cgs files are allowed.");
//         setFile(null);
//         e.target.value = ""; // Clear the file input
//       } else {
//         setError("");
//         setFile(selectedFile);
//       }
//     }
//   };

//   const handleUpload = () => {
//     if (!file) return;
//     console.log("Uploading:", file);
//     // Upload logic here
//   };

//   return (
//     <div>
//       <input type="file" accept=".xlsx,.cgs" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={!file}>
//         Upload
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default UploadComponent;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For navigation

// const UploadComponent = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const ErrorPage = () => (
//     <div>
//       <h2>❌ Upload Failed</h2>
//       <p>There was an issue with the file data. Please check and try again.</p>
//     </div>
//   );

//   const allowedExtensions = [".xlsx", ".cgs"];

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//       const extension = selectedFile.name
//         .substring(selectedFile.name.lastIndexOf("."))
//         .toLowerCase();

//       if (!allowedExtensions.includes(extension)) {
//         setError("❌ Error: Only .xlsx and .cgs files are allowed.");
//         setFile(null);
//         e.target.value = "";
//       } else {
//         setError("");
//         setFile(selectedFile);
//       }
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       console.log("Uploading:", file);

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const uploadSucceeded = Math.random() > 0.2; //

//       if (uploadSucceeded) {
//         navigate("/upload-success"); //
//       } else {
//         throw new Error("Upload failed");
//       }
//     } catch (err) {
//       navigate("/upload-error"); //
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".xlsx,.cgs" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={!file}>
//         Upload
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default UploadComponent;

import React, { useState } from "react";

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const allowedExtensions = [".xlsx", ".cgs"];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const extension = selectedFile.name
        .substring(selectedFile.name.lastIndexOf("."))
        .toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        setError("❌ Only .xlsx and .cgs files are allowed.");
        setFile(null);
        e.target.value = ""; // Clear the input
      } else {
        setError("");
        setFile(selectedFile);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("❌ Please select a valid file before uploading.");
      return;
    }

    try {
      console.log("Uploading:", file);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const uploadSucceeded = Math.random() > 0.2;

      if (uploadSucceeded) {     
        navigate("/upload-success");
      } else {
        setError("❌ Upload failed. Please try again.");
      }
    } catch (err) {
      setError("❌ Unexpected error during upload.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload File</h2>
      <input type="file" accept=".xlsx,.cgs" onChange={handleFileChange} />
      <br />
      <button
        onClick={handleUpload}
        disabled={!file}
        style={{ marginTop: "10px" }}
      >
        Upload
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default UploadComponent;
