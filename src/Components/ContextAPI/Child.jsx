import React, { useContext } from "react";
import { JsonApiData } from "./FetchAPI";

const Child = () => {
  let data = useContext(JsonApiData);
//   console.log(data);

//   console.log(data[1]);
  return (
    <div>
      <h1>I am in Child Component</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          
            {data.map((elem) => {
              let { id, name, username, email, phone, website } = elem;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{website}</td>
                </tr>
              );
            })}
          
        </tbody>
      </table>
    </div>
  );
};

export default Child;
