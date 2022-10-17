import { React, useRef } from "react";
import RangeSelector from "../common/RangeSelector";
import useInputTxt from "../../hooks/ui/useInputTxt";
import useInputEmail from "../../hooks/ui/useInputEmail";
import useHttpPOST from "../../hooks/common/useHttpPOST";

const AddNewUser = (props) => {
  const {
    inputVal: nameInputVal,
    isValError: nameError,
    errorMsg: nameErrorMsg,
    valChangeH: nameChangeH,
    inputBlurH: nameBlurH,
    resetField: resetName
  } = useInputTxt();

  const {
    inputVal: emailInputVal,
    isValError: emailError,
    errorMsg: emailErrorMsg,
    isTouched: isEmailTouched,
    valChangeH: emailChangeH,
    inputBlurH: emailBlurH,
    checkFromBackEnd: isEmailUsed,
    resetField: resetEmail
  } = useInputEmail();

  const useAgeRef = useRef();

  const {
    isReqComplete,
    respStatusCode ,
    respMessage,
    respError,
    sendPOSTReq: submitAddNewUser
  } = useHttpPOST();

  const respFunc = () => {
    props.setReloadListToggle(!props.reloadListToggle)
    resetForm()
  }

  const resetForm = () => {
    resetName()
    resetEmail()
  }

  const chckEmailLinkHndlr = (e) => {
    isEmailUsed();
  }

  const addNewBtnHndlr = (e) => {
    const addData = {
      userName: nameInputVal,
      userEmail: emailInputVal,
      userAge: useAgeRef.current.value,
    };
    const url = "http://localhost:8080/smaster-home/users/addNewUser";
    submitAddNewUser(url, addData, respFunc);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card border-primary mb-3">
            <div className="card-header text-bg-primary p-3">
              <h5 className="offcanvas-title">Add New User</h5>
            </div>
            <div className="card-body text-primary">
              <label htmlFor="userName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="test-user-01"
                value={nameInputVal}
                onChange={nameChangeH}
                onBlur={nameBlurH}
                maxLength={20}
              />
              {nameError && <p className="text-danger">{nameErrorMsg}</p>}
            </div>
            <div className="card-body text-primary">
              <label htmlFor="userEmail" className="form-label">
                Email address&nbsp;&nbsp;
              </label>
              {!emailError && isEmailTouched && (
                <a href="#" className="link-secondary" onClick={chckEmailLinkHndlr}>
                  Check Availaibility
                </a>
              )}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's email"
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
            </div>
            <div className="card-body text-primary">
              <RangeSelector
                minVal={18}
                maxVal={60}
                stepVal={1}
                rangeLabel="Age"
                ref={useAgeRef}
              ></RangeSelector>
            </div>
            <div className="card-body text-primary">
              <button
                type="button"
                className="btn btn-primary"
                onClick={addNewBtnHndlr}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default AddNewUser;
