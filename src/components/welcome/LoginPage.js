import React, { useEffect } from "react";
import useInputEmail from "../../hooks/ui/useInputEmail";
import useLoginChecks from "../../hooks/users/useLoginChecks";
import useUserSessionCheck from "../../hooks/users/useUserSessionCheck";
import * as AppConstants from "../../reduxstore/AppConstants";

const LoginPage = () => {
  console.log("--Login");

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
    respSCode,
    respMsg,
    checkEmail,
    resetField: resetBtn,
  } = useLoginChecks();

  const { isLoginExist: checkIsLogin } = useUserSessionCheck();

  const checkEmailHndlr = (e) => {
    checkEmail(emailInputVal);
  };

  const resetEmailHndlr = () => {
    resetBtn();
    resetEmail();
  };

  useEffect(() => {
    console.log("Login...");
    checkIsLogin();
  }, []);

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
              {emailError && (
                <div className="input-group mb-3">
                  <p className="text-danger">{emailErrorMsg}</p>
                </div>
              )}
              <div className="card-body text-dark">
                <button
                  type="button"
                  className="btn btn-dark"
                  disabled={emailError | !isEmailTouched}
                  onClick={checkEmailHndlr}
                >
                  Enter
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={resetEmailHndlr}
                >
                  Reset
                </button>
              </div>
              {respSCode === AppConstants.STATUS_ERROR && (
                <div className="card-body text-primary">
                  <div className="input-group mb-3">
                    <p className="text-danger">{respMsg}</p>
                  </div>
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
