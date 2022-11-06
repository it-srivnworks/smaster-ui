import React, { useEffect, useState } from "react";
import useHttpGETParam from "../../hooks/common/useHttpGETParam";
import useHttpPOST from "../../hooks/common/useHttpPOST";
import useInputEmail from "../../hooks/ui/useInputEmail";
import useInputPassword from "../../hooks/ui/useInputPassword";
import useInputTxt from "../../hooks/ui/useInputTxt";

const RegisterUser = () => {
  console.log("--RegisterUser");
  const [userType, setUserType] = useState([]);
  const [userTypeSel, setUserTypeSel] = useState(0);
  const [respComplete, setRespComplete] = useState(true);
  let pageError = false;

  const {
    inputVal: emailInputVal,
    isValError: emailError,
    errorMsg: emailErrorMsg,
    bckEndError: emailBckEndError,
    bckEndMsg: emailBckEndMsg,
    isTouched: isEmailTouched,
    valChangeH: emailChangeH,
    inputBlurH: emailBlurH,
    resetField: resetEmail,
    checkBckEnd: checkEmail
  } = useInputEmail();

  const {
    inputVal: fnameInputVal,
    isValError: fNameError,
    errorMsg: fnameErrorMsg,
    isTouched: fNameTouched,
    valChangeH: fnameChangeH,
    inputBlurH: fnameBlurH,
    resetField: resetFName,
  } = useInputTxt(3);

  const {
    inputVal: lnameInputVal,
    isValError: lNameError,
    errorMsg: lnameErrorMsg,
    isTouched: lNameTouched,
    valChangeH: lnameChangeH,
    inputBlurH: lnameBlurH,
    resetField: resetLName,
  } = useInputTxt(3);

  const {
    passwordVal: pwdVal,
    isPasswordError: isPwdError,
    isTouched: isPwdTouched,
    errorMsg: pwdErrorMsg,
    showPassword: showPwd,
    valChangeH: pwdChangeH,
    inputBlurH: pwdBlurH,
    toggleDisplay: toggleDisplayPwd,
    resetField: resetPwd,
  } = useInputPassword();

  const {
    sendGETParamReq: getUserType,
  } = useHttpGETParam();

  const { sendPOSTReq: postSendVal } = useHttpPOST();

  const postRespFunc = () => {
    console.log("postRespFunc................");
    setRespComplete(true);
  };

  const submitHndlr = () => {
    setRespComplete(false);
    console.log("submitHndlr................");
    let formData = {
      firstName: fnameInputVal,
      lastName: lnameInputVal,
      userEmail: emailInputVal,
      userPassword: pwdVal,
      userType: userTypeSel,
    };
    let url = "http://localhost:8080/smaster-home/useradmin/addNewUser";
    postSendVal(url, formData, postRespFunc);
  };

  const resetSubmitHndlr = () => {
    resetEmail()
    resetFName()
    resetLName()
    resetPwd()
  };

  const selectTypeHndlr = (e) => {
    setUserTypeSel(e.target.value);
  };

  const checkEmailHndlr = (e) => {
    checkEmail(emailInputVal);
  };

  const processResp = (statusCode, data) => {
    setUserType(data);
  };

  const loadData = () => {
    const url = "http://localhost:8080/smaster-home/data/getKVRefData";
    getUserType(url, { reqKey: "usertype" }, processResp);
  };

  useEffect(() => {
    loadData();
  }, []);

  pageError =
    fNameTouched &&
    !fNameError &&
    lNameTouched &&
    !lNameError &&
    isEmailTouched &&
    isPwdTouched &&
    !emailError &&
    !isPwdError &&
    !emailBckEndError;

  console.log("-->" + pageError);
  return (
    <div>
      <div className="row">&nbsp;</div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card border-dark mb-3">
            <div className="card-header text-bg-dark p-3">
              <h5 className="offcanvas-title">Register New User</h5>
            </div>
            <div className="card-body text-primary">
              <label htmlFor="firstName" className="form-label">
                First Name&nbsp;&nbsp;
                {fNameTouched && fNameError && (
                  <code className="text-danger">{fnameErrorMsg}</code>
                )}
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="John"
                  value={fnameInputVal}
                  onChange={fnameChangeH}
                  onBlur={fnameBlurH}
                  maxLength={40}
                />
              </div>
              <label htmlFor="lastName" className="form-label">
                Last Name&nbsp;&nbsp;
                {lNameTouched && lNameError && (
                  <code className="text-danger">{lnameErrorMsg}</code>
                )}
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Payne"
                  value={lnameInputVal}
                  onChange={lnameChangeH}
                  onBlur={lnameBlurH}
                  maxLength={40}
                />
              </div>
              <label htmlFor="userEmail" className="form-label">
                Email address&nbsp;&nbsp;
                {emailError && (
                  <code className="text-danger">{emailErrorMsg}</code>
                )}
                {emailBckEndMsg != "" && (
                  <code className="text-success">{emailBckEndMsg}</code>
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
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon2"
                  style={{ fontSize: "12px" }}
                  onClick={checkEmailHndlr}
                  disabled={emailError}
                >
                  Available?
                </button>
              </div>
              <label htmlFor="userEmail" className="form-label">
                Password&nbsp;&nbsp;
                {isPwdError && (
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
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  User Type
                </label>
                <select className="form-select" onChange={selectTypeHndlr}>
                  {Array.isArray(userType) &&
                    userType.map((user) => (
                      <option key={user.key} value={user.key}>
                        {user.value}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-group mb-3">
                <button
                  type="button"
                  className="btn btn-dark"
                  disabled={!pageError | !respComplete}
                  onClick={submitHndlr}
                >
                  Register&nbsp;&nbsp;
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
                  onClick={resetSubmitHndlr}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
