// import React from "react";
// import { useEffect } from "react";
// import { useTitle } from "../TitleContext";
// import UserInfo from "./UserInfo";

// const Matchedinvoice = () => {
//   const { setTitle } = useTitle();

//   const products = [
//     { title: "Cabbage", isFruit: true, id: 1 },
//     { title: "Garlic", isFruit: false, id: 2 },
//     { title: "Apple", isFruit: true, id: 3 },
//   ];
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   useEffect(() => {
//     setTitle("pyton-cigereate-balancing:Matched invoice");
//   }, [setTitle]);

//   return (
//     <>
//       <UserInfo isMain={true} />
//       <div>
//         <h1>Matched invoice</h1>

//         <ul>{listItems}</ul>
//       </div>
//     </>
//   );
// };

// export default Matchedinvoice;
import { useEffect, useReducer } from "react";
import { useTitle } from "../TitleContext";
import UserInfo from "./UserInfo";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Taylor", age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("pyton-cigirate-Balancing:Matched-Invoice");
  }, [setTitle]);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <UserInfo isMain={true} />
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
