import React from "react";
import PropTypes from "prop-types";
import { authActions } from "../../reduxstore/authStore";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as approutes from "../../reduxstore/AppRoutes";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/srivn_logo.png";

const HeaderPage = (props) => {
  console.log("---HeaderPage");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = sessionStorage.getItem("userEmail");

  const logOutHndlr = () => {
    dispatch(authActions.logOut());
    history.replace(approutes.app_login);
  };

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            border="0px solid #555"
            className="d-inline-block align-text-top"
          />
         <NavLink className="navbar-brand" to={approutes.app_home_dashboard}>
            &nbsp;&nbsp;Smaster
          </NavLink>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
          <button
                className="btn btn-outline-light"
                type="button"
                onClick={logOutHndlr}
              >
                Log Out
              </button>
          </div>
        </div>
      </header>
    </>
  );
};

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
};

HeaderPage.defaultProps = {
  title: "Title?",
};

export default HeaderPage;
