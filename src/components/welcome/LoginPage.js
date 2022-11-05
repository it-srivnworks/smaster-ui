import React, { useEffect, useState } from "react";
import useInputEmail from "../../hooks/ui/useInputEmail";
import useInputPassword from "../../hooks/ui/useInputPassword";
import useLoginChecks from "../../hooks/users/useLoginChecks";
import useUserSessionCheck from "../../hooks/users/useUserSessionCheck";
import * as AppConstants from "../../reduxstore/AppConstants";
import * as approutes from "../../reduxstore/AppRoutes";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  console.log("--Login...");
  const history = useHistory();
  let pageError =false;

  const {
    inputVal: emailInputVal,
    isValError: emailError,
    errorMsg: emailErrorMsg,
    isTouched: isEmailTouched,
    valChangeH: emailChangeH,
    inputBlurH: emailBlurH,
    resetField: resetEmail,
  } = useInputEmail();

  const {
    passwordVal: pwdVal,
    isPasswordError: isPwdError,
    errorMsg: pwdErrorMsg,
    showPassword: showPwd,
    isTouched: isPwdTouched,
    valChangeH: pwdChangeH,
    inputBlurH: pwdBlurH,
    toggleDisplay: toggleDisplayPwd,
    resetField: resetPwd,
  } = useInputPassword();

  const {
    respComplete,
    respCode,
    respMsg,
    checkLogin,
    resetField: resetBtn,
  } = useLoginChecks();

  const { 
    isLoginExist: checkIsLogin 
  } = useUserSessionCheck();

  const checkLoginHndlr = () => {
    checkLogin(emailInputVal, pwdVal);
  };

  const resetLoginHndlr = () => {
    resetBtn();
    resetEmail();
    resetPwd();
  };

  const addNewUserHndlr = () => {
    history.replace(approutes.app_register);
  }

  useEffect(() => {
    checkIsLogin();
  }, [respComplete]);

  pageError = isEmailTouched && !emailError && isPwdTouched  &&  !isPwdError;
  return (
    <>
      <div className="row">&nbsp;</div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card border-dark mb-3">
            <div className="card-header text-bg-dark p-3">
              <h5 className="offcanvas-title">Sign In</h5>
            </div>
            <div className="card-body text-primary">
              <label htmlFor="userEmail" className="form-label">
                Email address&nbsp;&nbsp;
                {isEmailTouched && emailError && (
                  <code className="text-danger">{emailErrorMsg}</code>
                )}
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="sample@srivn.com"
                  value={emailInputVal}
                  onChange={emailChangeH}
                  onBlur={emailBlurH}
                  maxLength={40}
                />
              </div>
              <label htmlFor="userEmail" className="form-label">
                Password&nbsp;&nbsp;
                {isPwdTouched && isPwdError && (
                  <code className="text-danger">{pwdErrorMsg}</code>
                )}
              </label>
              <div className="input-group mb-3">
                <input
                  type={showPwd ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  value={pwdVal}
                  onChange={pwdChangeH}
                  onBlur={pwdBlurH}
                  maxLength={30}
                />
                {!showPwd && (
                  <span className="input-group-text" id="basic-addon2">
                    <i
                      onClick={toggleDisplayPwd}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  </span>
                )}
                {showPwd && (
                  <span className="input-group-text" id="basic-addon2">
                    <i
                      onClick={toggleDisplayPwd}
                      className="fa-solid fa-eye"
                    ></i>
                  </span>
                )}
              </div>
              <div className="input-group mb-3">
                <button
                  type="button"
                  className="btn btn-dark"
                  disabled={!pageError | !respComplete}
                  onClick={checkLoginHndlr}
                >
                  Login&nbsp;&nbsp;
                  {!respComplete && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={resetLoginHndlr}
                >
                  Reset
                </button>
                &nbsp;&nbsp;
                <button type="button" className="btn btn-dark btn-sm" onClick={addNewUserHndlr}>
                  Register New User!
                </button>
              </div>
              {respCode === AppConstants.STATUS_ERROR && (
                <div className="alert alert-danger" role="alert">
                  <code>{respMsg}</code>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default LoginPage;
