import React, { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Example API
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>address</th>
              <th>website</th>
              <th>company</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{`${user.address.street}, ${user.address.city},${user.address.zipcode}`}</td>
                <td>{user.website}</td>
                <td>{`${user.company.name},${user.company.bs}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
