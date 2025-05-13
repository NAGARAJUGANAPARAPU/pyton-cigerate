import React, { useEffect, useState } from "react";
import UserInfo from "../pages/UserInfo";
import { useTitle } from "../TitleContext";

const Contact = () => {
  const { setTitle } = useTitle();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;
  useEffect(() => {
    setTitle("Pyton-Cigereate-Balancing:Contact");
  });
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <UserInfo isAdmit={true} />
      <div>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, comments, or concerns, please feel free to
          reach out to us. We value your feedback and are here to help you in
          any way we can.
        </p>
        <p>Email:nagaraju@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, City, State, ZIP</p>
        <p>
          You can also follow us on social media for updates and news:
          <ul>
            <li>Facebook: @yourcompany</li>
            <li>Twitter: @yourcompany</li>
            <li>Instagram: @yourcompany</li>
          </ul>
        </p>
      </div>

      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
};

export default Contact;
