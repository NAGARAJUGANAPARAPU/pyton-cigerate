// // import React, { useState } from "react";

// // export default function CrudWithPopup() {
// //   const [items, setItems] = useState([]);
// //   const [inputValue, setInputValue] = useState("");
// //   const [editingIndex, setEditingIndex] = useState(null);
// //   const [showModal, setShowModal] = useState(false);

// //   const handleAddOrUpdate = () => {
// //     if (inputValue.trim() === "") return;

// //     if (editingIndex !== null) {
// //       const updatedItems = [...items];
// //       updatedItems[editingIndex] = inputValue;
// //       setItems(updatedItems);
// //       setEditingIndex(null);
// //     } else {
// //       setItems([...items, inputValue]);
// //     }

// //     setInputValue("");
// //     setShowModal(false);
// //   };

// //   const handleEdit = (index) => {
// //     setEditingIndex(index);
// //     setInputValue(items[index]);
// //     setShowModal(true);
// //   };

// //   const handleDelete = (index) => {
// //     const newItems = items.filter((_, i) => i !== index);
// //     setItems(newItems);
// //   };

// //   return (
// //     <div className="p-6 max-w-md mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">CRUD with Popup</h1>

// //       <button
// //         onClick={() => {
// //           setEditingIndex(null);
// //           setInputValue("");
// //           setShowModal(true);
// //         }}
// //         className="bg-blue-600 text-white px-4 py-2 rounded"
// //       >
// //         Add Item
// //       </button>

// //       <ul className="mt-4 space-y-2">
// //         {items.map((item, index) => (
// //           <li
// //             key={index}
// //             className="flex justify-between bg-gray-100 p-2 rounded"
// //           >
// //             <span>{item}</span>
// //             <div className="space-x-2">
// //               <button
// //                 onClick={() => handleEdit(index)}
// //                 className="text-blue-500"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => handleDelete(index)}
// //                 className="text-red-500"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Popup Modal */}
// //       {showModal && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //           <div className="bg-white p-6 rounded shadow-lg w-80">
// //             <h2 className="text-xl font-semibold mb-4">
// //               {editingIndex !== null ? "Edit Item" : "Add Item"}
// //             </h2>
// //             <input
// //               value={inputValue}
// //               onChange={(e) => setInputValue(e.target.value)}
// //               className="border border-gray-300 p-2 w-full mb-4 rounded"
// //               placeholder="Enter value"
// //             />
// //             <div className="flex justify-end space-x-2">
// //               <button
// //                 onClick={() => setShowModal(false)}
// //                 className="px-3 py-1 rounded bg-gray-300"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleAddOrUpdate}
// //                 className="px-3 py-1 rounded bg-blue-600 text-white"
// //               >
// //                 {editingIndex !== null ? "Update" : "Add"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// const CrudWithPopup = () => {
//   const [data, setData] = useState([
//     { item: "Apple", item1: "Fruit" },
//     { item: "Carrot", item1: "Vegetable" },
//   ]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [current, setCurrent] = useState({ item: "", item1: "" });
//   const [isEdit, setIsEdit] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const openModal = (
//     row = { item: "", item1: "" },
//     index = null,
//     editable = false
//   ) => {
//     setCurrent(row);
//     setEditIndex(index);
//     setIsEdit(editable);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setCurrent({ item: "", item1: "" });
//     setEditIndex(null);
//     setIsEdit(false);
//   };

//   const handleChange = (e) => {
//     setCurrent({ ...current, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     if (editIndex !== null) {
//       const updated = [...data];
//       updated[editIndex] = current;
//       setData(updated);
//     } else {
//       setData([...data, current]);
//     }
//     closeModal();
//   };

//   const handleDelete = () => {
//     if (editIndex !== null) {
//       const updated = data.filter((_, idx) => idx !== editIndex);
//       setData(updated);
//       closeModal();
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Items Table</h2>
//         <Button onClick={() => openModal({}, null, true)}>Add New Item</Button>
//       </div>
//       <table className="w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border p-2">Item</th>
//             <th className="border p-2">Item1</th>
//             <th className="border p-2">Edit</th>
//             <th className="border p-2">View</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, idx) => (
//             <tr key={idx}>
//               <td className="border p-2">{row.item}</td>
//               <td className="border p-2">{row.item1}</td>
//               <td className="border p-2">
//                 <Button onClick={() => openModal(row, idx, true)}>Edit</Button>
//               </td>
//               <td className="border p-2">
//                 <Button
//                   variant="outline"
//                   onClick={() => openModal(row, idx, false)}
//                 >
//                   View
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               {isEdit
//                 ? editIndex !== null
//                   ? "Edit Item"
//                   : "Add Item"
//                 : "View Item"}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm">Item</label>
//               <input
//                 type="text"
//                 name="item"
//                 className="w-full border px-3 py-2 rounded"
//                 value={current.item}
//                 onChange={handleChange}
//                 disabled={!isEdit}
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Item1</label>
//               <input
//                 type="text"
//                 name="item1"
//                 className="w-full border px-3 py-2 rounded"
//                 value={current.item1}
//                 onChange={handleChange}
//                 disabled={!isEdit}
//               />
//             </div>
//             <div className="flex gap-2 justify-end">
//               {isEdit && <Button onClick={handleSave}>Update</Button>}
//               {isEdit && editIndex !== null && (
//                 <Button variant="destructive" onClick={handleDelete}>
//                   Delete
//                 </Button>
//               )}
//               <Button variant="ghost" onClick={closeModal}>
//                 Close
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default CrudWithPopup;
