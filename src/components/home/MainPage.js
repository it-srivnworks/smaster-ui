import React from "react";
import UserInfo from "../Users/UserInfo";

const MainPage = () => {
  console.log("--MainPage--");
  return (
    <>
      <div className="main-panel">
        <UserInfo></UserInfo>
      </div>
    </>
  );
};

export default MainPage;
