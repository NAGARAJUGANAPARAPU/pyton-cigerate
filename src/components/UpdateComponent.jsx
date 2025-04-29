import React, { useState } from "react";

function UpdateComponent() {
  const [inputValue, setInputValue] = useState("");
  const [updated, setUpdated] = useState(false);

  const correctData = "0123456789"; // ✅ Set your correct input here

  const handleUpdate = () => {
    if (!inputValue.trim()) {
      alert("⚠️ No data entered!");
      return;
    }
    const digitOnlyRegex = /^\d{1,9}$/;

    if (!digitOnlyRegex.test(inputValue)) {
      alert("❌ Incorrect data! Only digits (0-9), max 9 characters allowed.");
      return;
    }

    // if (inputValue !== correctData) {
    //   alert('❌ Incorrect data!');
    //   return;
    // }

    // ✅ Correct input - show success message
    setUpdated(true);
    setTimeout(() => setUpdated(false), 3000);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter correct data"
        className="border p-2 w-full rounded mb-4"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update
      </button>

      {updated && (
        <p className="mt-4 text-green-600 font-medium">✅ Update Complete!</p>
      )}
    </div>
  );
}

export default UpdateComponent;
