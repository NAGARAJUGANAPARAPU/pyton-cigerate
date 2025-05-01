import React from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ isMain, isDraftInvoice, isvenders, isAdmit }) => {
  return (
    <>
      <div className="userinfo">
        <div>
          <h1>GANAPARAPU NAGARAJU</h1>
        </div>

        <div className="Links">
          <ul>
            {isDraftInvoice && <Link to="/draft-invoice">Draft-Invoice</Link>}
            {isvenders && <Link to="/draft-invoice">Draft-Invoice</Link>}
            {isAdmit && <Link to="/draft-invoice">Draft-Invoice</Link>}
            {isMain && <Link to="/">Main</Link>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
