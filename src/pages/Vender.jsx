import React, { useEffect, useState } from "react";
import { useTitle } from "../TitleContext";
import UserInfo from "./UserInfo";

const initialVendors = [
  {
    id: 1,
    name: "Vendor One",
    email: "vendor1@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Vendor Two",
    email: "vendor2@example.com",
    phone: "987-654-3210",
  },
];

export default function VendorPage() {
  const [vendors, setVendors] = useState(initialVendors);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const { setTitle } = useTitle();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddVendor = () => {
    const newVendor = { id: Date.now(), ...form };
    setVendors([...vendors, newVendor]);
    setForm({ name: "", email: "", phone: "" });
  };
  const handleDelVendor = (id) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id));
  };

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Vendor Page");
  }, [setTitle]);

  return (
    <>
      <div>
        <UserInfo isMain={true} />
        <h1>Vendor Page</h1>

        <div className="vendor-container">
          <h2>Add New Vendor</h2>
          <input
            type="text"
            className="vendor-input"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="vendor-input"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            className="vendor-input"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <button onClick={handleAddVendor}>Add</button>
        </div>

        <div>
          <h2>Vendor List</h2>
          <ul className="vendor-list">
            {vendors.map((vendor) => (
              <li key={vendor.id}>
                <p>{vendor.name}</p>
                <p>
                  {vendor.email} • {vendor.phone}
                  <button onClick={() => handleDelVendor(vendor.id)}>
                    Delete
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
