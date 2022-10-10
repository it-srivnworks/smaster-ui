import React from "react";
import AddNewUser from "../Users/AddNewUser";
import AddNewUser01 from "../Users/AddNewUser01";
import AddNewUser02 from "../Users/AddNewUser02";
import UserInfo from "../Users/UserInfo";

const MainPage = () => {
  console.log("--MainPage--");
  return (
    <>
      <div className="main-panel">
        <AddNewUser01></AddNewUser01>
        <AddNewUser02></AddNewUser02>
        {/*<AddNewUser></AddNewUser>*/}
        {/*<UserInfo></UserInfo>*/}
      </div>
    </>
  );
};

export default MainPage;
