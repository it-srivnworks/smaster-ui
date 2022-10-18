import React, { useRef, useState } from "react";
import AddNewUser from "../Users/AddNewUser";
import ViewUserInfo from "../Users/ViewUserInfo";

const MainPage = () => {
  console.log("---MainPage--");
  
  return (
    <>
      <div className="main-panel">
        <AddNewUser></AddNewUser>
        <ViewUserInfo></ViewUserInfo>
      </div>
    </>
  );
};

export default MainPage;
