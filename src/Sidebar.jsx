import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <ul>
          <Link to="/draft-invoice">
            <li>Draft invoice</li>
          </Link>
          <Link to="/reporting">
            <li>Reporting</li>
          </Link>
          <Link to="/vendors">
            <li>venders</li>
          </Link>
          <Link to="/matched-invoice">
            <li>Matched Invoice</li>
          </Link>{" "}
          <Link to="/manual-testing">
            <li>Manual Testing</li>
          </Link>
          <Link to="/manual-acounting">
            <li>manual Accounting Invoice</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
