import React, { useState } from "react";

const UserInfoTable = (props) => {
  const[counter,setCounter] = useState(0)

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">SrNo</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((user) => (
            <tr key={user.userEmail}>
              <th scope="row">{counter}</th>
              <td>{user.userName}</td>
              <td>{user.userEmail}</td>
              <td>{user.userAge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserInfoTable;
