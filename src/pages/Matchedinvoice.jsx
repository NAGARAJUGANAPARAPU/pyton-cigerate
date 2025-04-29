import React from "react";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";

const Matchedinvoice = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Matched invoice");
  }, [setTitle]);

  return (
    <>
      <div>
        <h1>Matched invoice</h1>
      </div>
    </>
  );
};

export default Matchedinvoice;
