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
      <div>
        <ul>
          <Link to="/draft-invoice/venders">
            <li>venders</li>
          </Link>
          <Link to="/draft-invoice/admit">
            <li>admin</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>contact</li>
          </Link>
          <Link>
            <li>creater</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Draftinvoice;
