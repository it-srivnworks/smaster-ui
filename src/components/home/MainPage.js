import React from "react";
import AddNewUser from "../Users/AddNewUser";
import UserInfo from "../Users/UserInfo";

const MainPage = () => {
  console.log("--MainPage--");
  return (
    <>
      <div className="main-panel">
        <AddNewUser></AddNewUser>
        {/*<UserInfo></UserInfo>*/}
      </div>
    </>
  );
};

export default MainPage;
