import React from "react";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";
import UserInfo from "./UserInfo";

const Reporting = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Reporting");
  }, [setTitle]);
  return (
    <>
      <UserInfo isMain={true} />
      <div>
        <label>process type</label>
        <input type="file" />
        <input type="color" />
        <input type="search" />
      </div>
    </>
  );
};

export default Reporting;
