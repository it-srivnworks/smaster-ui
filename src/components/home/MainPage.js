import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserDashBoard from "../dashboard/UserDashBoard";
import AddNewUser from "../Users/AddNewUser";
import UserHome from "../Users/UserHome";
import ViewUserInfo from "../Users/ViewUserInfo";

const MainPage = () => {
  console.log("---MainPage--");

  return (
    <>
      <div className="main-panel">
        Main Page!
            <UserDashBoard></UserDashBoard>
           <UserHome></UserHome>
      </div>
    </>
  );
};

export default MainPage;
