import React from "react";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";
import UserInfo from "./UserInfo";

const Vender = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Vender invoice");
  }, [setTitle]);

  return (
    <>
      <UserInfo />
      <div>
        <h1>vender page</h1>
      </div>
    </>
  );
};

export default Vender;
