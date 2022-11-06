import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import useUserSessionCheck from "../../hooks/users/useUserSessionCheck";
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
      <div className="container-fluid">
        <div className="row">
          <SidePanel></SidePanel>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div>
              <MainPage></MainPage>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
