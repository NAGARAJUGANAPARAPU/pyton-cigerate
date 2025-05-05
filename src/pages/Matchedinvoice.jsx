import React from "react";
import { useEffect } from "react";
import { useTitle } from "../TitleContext";
import UserInfo from "./UserInfo";

const Matchedinvoice = () => {
  const { setTitle } = useTitle();

  const products = [
    { title: "Cabbage", isFruit: true, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  useEffect(() => {
    setTitle("pyton-cigereate-balancing:Matched invoice");
  }, [setTitle]);

  return (
    <> 
      <UserInfo isMain={true} />
      <div>
        <h1>Matched invoice</h1>

        <ul>{listItems}</ul>
      </div>
    </>
  );
};

export default Matchedinvoice;
