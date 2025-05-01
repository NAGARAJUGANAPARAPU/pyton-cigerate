import React from "react";
import UserInfo from "./UserInfo";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";

const Manualaccounting = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Manualaccounting");
  }, [setTitle]);
  return (
    <>
      <UserInfo isMain={true} />
      <div>
        <h1>Manualaccounting </h1>
      </div>
    </>
  );
};

export default Manualaccounting;
