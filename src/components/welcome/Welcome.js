import React from "react";
import LoginPage from "./LoginPage";
import Tester from "./../test/Tester";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import HomePage from "../home/HomePage";
const Welcome = () => {
  console.log("--Welcome");
  return (
    <>
    <Switch>
      <Route path="/welcome" exact>
        <Redirect to="/welcome/login" />
      </Route>
      <Route path="/welcome/login" exact>
        <LoginPage></LoginPage>
      </Route>
      <Route path="/welcome/tester" exact>
        <Tester></Tester>
      </Route>
      <Route path="/welcome/*">
        <NotFound></NotFound>
      </Route>
      </Switch>  
    </>
  );
};

export default Welcome;
