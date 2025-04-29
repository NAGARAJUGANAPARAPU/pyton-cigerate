// import React from "react";
// import { useTitle } from "./TitleContext";

// const Header = () => {
//     const title = useTitle();

//     return (
//         <>
//             <div className="header-container">
//                 <div className="header-img">
//                     <img src="./assets/img1.jpg" alt="logo" />
//                 </div>
//                 <header className="header-title">
//                     <h1>{title}</h1>
//                 </header>
//             </div>
//         </>
//     );
// };

// export default Header;
import React from "react";
import { useTitle } from "./TitleContext";
import { useEffect } from "react";

const Header = () => {
  const { title } = useTitle();
//   const { setTitle } = useTitle();

//   useEffect(() => {
//     setTitle("pyton-cigereate-balancing");
//   }, [setTitle]);

  return (
    <>
      <div className="header-container">
        <div className="header-img">
          <img src="./assets/img1.jpg" alt="logo" />
        </div>
        <header className="header-title">
          <h1>{title}</h1>
        </header>
      </div>
    </>
  );
};

export default Header;
