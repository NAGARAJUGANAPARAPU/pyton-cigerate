import React from "react";
import { useTitle } from "../TitleContext";
import { useEffect } from "react";
import Sidebar from "../Sidebar";

const Home = () => {
  // const { title } = useTitle();
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("pyton-cigereate-balancing,");
  }, [setTitle]);
  // useEffect(() => {
  //   setTitle({ text: "pyton-cigereate-balancing", style: { color: "white" } });
  // }, [setTitle]);

  return (
    <>
      <Sidebar />
    </>
  );
};

export default Home;
