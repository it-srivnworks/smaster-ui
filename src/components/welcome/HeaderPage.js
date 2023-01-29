import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import * as approutes from "../../reduxstore/AppRoutes";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/srivn_logo.png";

const HeaderPage = (props) => {
  console.log("---HeaderPage");
  
  const logOutHndlr = () => {
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            border="0px solid #555"
            className="d-inline-block align-text-top"
          />
          <NavLink className="navbar-brand" to="{approutes.app_home_dashboard}">
            &nbsp;&nbsp;Smaster
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}
                  aria-current="page"
                  to="{approutes.app_home_dashboard}"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}
                  to="{approutes.app_home_users}"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}
                  to={approutes.library}
                >
                  Library
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/*user*/}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    Notifications
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Roles
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Others
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </ul>
            <ul className="navbar-nav">
              <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={logOutHndlr}
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
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
