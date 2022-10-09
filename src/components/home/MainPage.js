import React from "react";
import AddNewUser from "../Users/AddNewUser";
import AddNewUser01 from "../Users/AddNewUser01";
import UserInfo from "../Users/UserInfo";

const MainPage = () => {
  console.log("--MainPage--");
  return (
    <>
      <div className="main-panel">
        <AddNewUser01></AddNewUser01>
        {/*<AddNewUser></AddNewUser>*/}
        {/*<UserInfo></UserInfo>*/}
      </div>
    </>
  );
};

export default MainPage;
