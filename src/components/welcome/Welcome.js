import React from "react";
import { Route, Routes } from "react-router-dom";
import LibraryHome from "../library/LibraryHome";
import HomePage from "./HomePage";
import Login from "./Login";
import NotFound from "./NotFound";
import * as approutes from "../../reduxstore/AppRoutes";

const Welcome = () => {
  console.log("-Welcome");
  return (
    <>
    <Routes>
          <Route path={approutes.defaultPage} element={<Login />}></Route>
          <Route path={approutes.welcome} element={<HomePage />}>
            <Route path={approutes.library} element={<LibraryHome />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </>
  );
};

export default Welcome;
