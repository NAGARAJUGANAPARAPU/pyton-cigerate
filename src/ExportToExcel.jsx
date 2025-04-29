// import React from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const ExportToExcel = () => {
//   const data = [
//     { name: "Alice", age: 25, city: "New York" },
//     { name: "Bob", age: 30, city: "Chicago" },
//     { name: "Charlie", age: 28, city: "Los Angeles" },
//   ];

//   const exportToExcel = (e) => {
//     e.preventDefault(); // Prevent navigation if it's an <a> tag

//     // Convert JSON to worksheet
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const dataBlob = new Blob([excelBuffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });

//     saveAs(dataBlob, "exported-data.xlsx");
//   };

//   return (
//     <a
//       href="#"
//       onClick={exportToExcel}
//       className="text-blue-500 underline hover:text-blue-700"
//     >
//       Excel
//     </a>
//   );
// };

// export default ExportToExcel;
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportToExcel = () => {
  const exportToExcel = async (e) => {
    e.preventDefault();

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      // Convert JSON to worksheet
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Write workbook to binary and create a Blob
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const dataBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Trigger download
      saveAs(dataBlob, "api-data.xlsx");
    } catch (error) {
      console.error("Failed to fetch and export data:", error);
    }
  };

  return (
    <a
      href="#"
      onClick={exportToExcel}
      className="text-blue-500 underline hover:text-blue-700"
    >
      Export API Data to Excel
    </a>
  );
};

export default ExportToExcel;
