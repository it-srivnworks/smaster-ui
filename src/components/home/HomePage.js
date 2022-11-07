import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import useUserSessionCheck from "../../hooks/users/useUserSessionCheck";
import ContainerPage from "./ContainerPage";
import FooterPage from "./FooterPage";
import HeaderPage from "./HeaderPage";
import MainPage from "./MainPage";
import SidePanel from "./SidePanel";

const HomePage = () => {
  console.log("--HomePage");

  const { isLoginExist: checkIsLogin } = useUserSessionCheck();
  useEffect(() => {
    console.log("Login...");
    checkIsLogin();
  }, []);

  return (
    <>
      <HeaderPage title="Smaster"></HeaderPage>
      <ContainerPage></ContainerPage>
      <SidePanel></SidePanel>
      <FooterPage></FooterPage>
    </>
  );
};

export default HomePage;
