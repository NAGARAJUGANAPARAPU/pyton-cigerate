import React from "react";
import UserInfo from "./UserInfo";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";
import Table from "../datapages/Table";
import { Link } from "react-router-dom";
import Reporting from "./Reporting";

const Manualtesting = () => {
  const { setTitle } = useTitle();
  const showTable = false;

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:ManualTesting");
  }, [setTitle]);
  return (
    <>
      <UserInfo isMain={true} />
      {showTable && <Table />} {/* Conditionally render Table */}
      <div>
        <nav className="navbar-container">
          <div className="logo">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240122102711/2.png"
              alt="Logo"
            />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </div>
      <Reporting />
    </>
  );
};

export default Manualtesting;
