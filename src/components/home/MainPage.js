import React, { useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserDashBoard from "../dashboard/UserDashBoard";
import UserHome from "../Users/UserHome";
import * as approutes from "../../reduxstore/AppRoutes";

const MainPage = () => {
  console.log("---MainPage--");

  return (
    <>
      <div className="main-panel">
        <Switch>
          <Route path={approutes.app_home} exact>
            <Redirect to={approutes.app_home_dashboard} />
          </Route>
          <Route path={approutes.app_home_dashboard} exact>
            <UserDashBoard></UserDashBoard>
          </Route>
          <Route path={approutes.app_home_users} exact>
            <UserHome></UserHome>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default MainPage;
