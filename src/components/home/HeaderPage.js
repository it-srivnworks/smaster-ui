import React from "react";
import PropTypes from "prop-types";
import { authActions } from "../../reduxstore/authStore";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const HeaderPage = (props) => {
  console.log("---HeaderPage");
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutHndlr = () => {
    dispatch(authActions.logOut());
    history.replace("/welcome/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Users
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={logOutHndlr}
              >
                LogOut
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
