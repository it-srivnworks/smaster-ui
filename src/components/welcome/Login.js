import React from "react";
import * as approutes from "../../reduxstore/AppRoutes";
import { useNavigate } from "react-router-dom";
const Login = () => {
  console.log("-Login");
  const navigate = useNavigate();

  const enterSiteHndlr = () => {
    console.log("enterSiteHndlr");
    navigate(approutes.welcome);
  };

  return (
    <>
      <div className="position-absolute top-50 start-50">
        <button
          type="button"
          className="btn btn-dark btn-sm"
          onClick={enterSiteHndlr}
        >
          Login &nbsp;
          <i className="fa-sharp fa-solid fa-arrow-right" />
        </button>
      </div>
    </>
  );
};

export default Login;
