import React, { useEffect, useState } from "react";
import UserInfo from "../pages/UserInfo";
import { useTitle } from "../TitleContext";
import Table from "../datapages/Table";

const Creater = () => {
  const { setTitle } = useTitle();
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTitle("Pyton-Cigereate-Balancing:Creater");
  });
  const handler = () => {
    setShowTable((prev) => !prev);
    // setShowTable(true);
  };

  const renderContent = ({ data, onDelete }) => {
    if (!data || data.length === 0) {
      return <p>No data available.</p>;
    }
    return null; // Add your table rendering logic here if needed
  };
  const addContent = () => {
    const newData = {
      id: data.length + 1,
      name: `Item ${data.length + 1}`,
      description: "Sample data",
    };
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <>
      <UserInfo isAdmit={true} />
      <div>
        <h1>Creater</h1>
        <p>
          The Creater page is designed to provide users with the ability to
          create and manage their data efficiently. Users can input their data,
          customize settings, and generate reports as needed.
        </p>
        <p>
          This page is user-friendly and intuitive, ensuring that users can
          navigate through the creation process seamlessly. Whether you are a
          beginner or an experienced user, the Creater page has something for
          everyone.
        </p>
        <p>
          If you have any questions or need assistance, please refer to the
          documentation or contact our support team for help.
        </p>
      </div>
      <div>
        <button onClick={handler}>
          Click here to create
          {showTable ? "Hide Table" : "Show Table"}
        </button>

        <button onClick={addContent}>Add content</button>
      </div>
      {showTable && <Table />}
      {data.length > 0 &&
        data.map((item) => (
          // <li key={item.id}>
          //   {item.name}: {item.description}
          // </li>
          <table key={item.id}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>

                <td>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
    </>
  );
};

export default Creater;
