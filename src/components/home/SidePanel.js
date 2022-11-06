import React from "react";
import * as approutes from "../../reduxstore/AppRoutes";
import { NavLink } from "react-router-dom";

const SidePanel = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="nav-link active"
                aria-current="page"
                to={approutes.app_home_dashboard}
              >
               <i className="fa-sharp fa-solid fa-gauge"></i>&nbsp;Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="nav-link active"
                to={approutes.app_home_users}
              >
                <i className="fa-sharp fa-solid fa-user"></i>&nbsp;Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SidePanel;
