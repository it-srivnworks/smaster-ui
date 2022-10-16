import React from "react";
import ViewUserInfo from "../Users/ViewUserInfo";

const MainPage = () => {
  console.log("---MainPage--");
  return (
    <>
      <div className="main-panel">
        <ViewUserInfo></ViewUserInfo>
      </div>
    </>
  );
};

export default MainPage;
