import React from "react";

const UserInfoTable = (props) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((user) => (
            <tr key={user.userId}>
              <th scope="row">{user.userId}</th>
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
