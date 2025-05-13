import React, { useEffect, useState } from "react";
import UserInfo from "../pages/UserInfo";
import { useTitle } from "../TitleContext";
import Table from "../datapages/Table";
import { Link } from "react-router-dom";
import Reporting from "../pages/Reporting";

const About = () => {
  const { setTitle } = useTitle();
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setTitle("Pyton-Cigereate-Balancing:About");
  }, [setTitle]);
  const show = () => {
    setShowTable((prev) => !prev);
    // setShowTable(true);
  };
  const photos = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/1a-(2).jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/2b.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/13.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/15.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/12.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/14.jpg",
  ];

  return (
    <>
      <UserInfo isAdmit={true} />

      <div>
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a team of dedicated professionals
          committed to providing you with the best service possible. Our mission
          is to deliver high-quality products and services that meet your needs
          and exceed your expectations.
        </p>
      </div>
      <div>
        <button onClick={show}>SUBMIT</button>
      </div>
      {showTable && <Table />}

      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <Link to={`/photo$/reporting`} key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default About;
