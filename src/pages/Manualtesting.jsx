import React from "react";
import UserInfo from "./UserInfo";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";

const Manualtesting = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("pyton-cigereate-balancing:ManualTesting");
  }, [setTitle]);
  return (
    <>
      <UserInfo  isMain={true} />
      <div>
        <h1>Manualtesting</h1>
      </div>
    </>
  );
};

export default Manualtesting;
