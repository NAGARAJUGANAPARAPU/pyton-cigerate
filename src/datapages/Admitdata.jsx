import React, { useEffect, useState } from "react";
import UserInfo from "../pages/UserInfo";
import { useTitle } from "../TitleContext";
import Table from "../datapages/Table";

const Admitdata = () => {
  const { setTitle } = useTitle();
  const [showTable, setShowTable] = useState(false);
  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Admit");
  }, [setTitle]);
  const handleOpen = () => {
    setShowTable(true);
  };
  return (
    <>
      <UserInfo isAdmit="true" />
      <div>
        {!showTable && <button onClick={handleOpen}>Admit</button>}

        {showTable && <Table />}
      </div>
    </>
  );
};

export default Admitdata;
