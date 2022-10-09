import React, { useEffect, useRef, useState } from "react";
import UserInfoTable from "./UserInfoTable";

const UserInfo = () => {
  console.log("--UserInfo--");
  const [isGetAll, setIsGetAll] = useState(true);
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    console.log("isGetAll : useEffect Called Back End");
    fetch("http://localhost:8080/smaster-home/welcome/getUserAll")
      .then((response) => response.json())
      .then((json) => {
        setuserData(json);
      })
      .catch((error) => console.log(error));
  }, [isGetAll]);

  const showHndlr = () => {
    setIsGetAll(true);
  };

  const hideHndlr = () => {
    setIsGetAll(false);
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={showHndlr}
              >
                Refresh List
              </button>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={hideHndlr}
              >
                Hide
              </button>
            </div>
          </div>
          <div className="row">
            {isGetAll ? (
              <UserInfoTable userData={userData}></UserInfoTable>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
