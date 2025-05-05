import React from "react";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import { useTitle } from "../TitleContext";
import Table from "../datapages/Table";

const Manualaccounting = () => {
  const [showTable, setShowTable] = useState(false);

  const { setTitle } = useTitle();
  const handleShowTable = () => {
    // showTable ? setShowTable(false) : setShowTable(true);
setShowTable((prev) => !prev);
  //   setShowTable(true);
  };

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Manualaccounting");
  }, [setTitle]);
  return (
    <>
      <UserInfo isMain={true} />
      <button onClick={handleShowTable}>
        {showTable ? "Hide Table" : "Show Table"}
      </button>

      <div>{showTable && <Table />}</div>
    </>
  );
};

export default Manualaccounting;
