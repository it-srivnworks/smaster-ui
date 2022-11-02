import React from "react";
import LoginPage from "./LoginPage";
import Tester from "./../test/Tester";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import HomePage from "../home/HomePage";
import * as approutes from "../../reduxstore/AppRoutes";
import RegisterUser from "../Users/RegisterUser";

const Welcome = () => {
  console.log("--Welcome");
  return (
    <>
      <Switch>
        <Route path="/app" exact>
          <Redirect to={approutes.app_login} />
        </Route>
        <Route path={approutes.app_login} exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path={approutes.app_home}>
          <HomePage></HomePage>
        </Route>
        <Route path={approutes.app_register}>
          <RegisterUser></RegisterUser>
        </Route>
        <Route path={approutes.app_not_found}>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </>
  );
};

export default Welcome;
