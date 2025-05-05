import React from "react";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

const Draftinvoice = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Draft invoice");
  }, [setTitle]);

  return (
    <>
      <UserInfo isMain="false" />
      <div className="draft-invoice-links">
        <ul>
          <Link to="/draft-invoice/venders">
            <li>venders</li>
          </Link>
          <Link to="/draft-invoice/admit">
            <li>admin</li>
          </Link>
          <Link to="/draft-invoice/About">
            <li>About</li>
          </Link>
          <Link to="/draft-invoice/Contact">
            <li>contact</li>
          </Link>
          <Link to="/draft-invoice/Creater">
            <li>Creater</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Draftinvoice;
