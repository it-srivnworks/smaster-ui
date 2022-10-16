import React, { useRef, useState } from "react";
import RangeSelector from "../common/RangeSelector";
import axios from "axios";

const AddNewUser = () => {
  console.log("--AddNewUser--");

  const userNameRef = useRef();
  const useEmailRef = useRef();
  const useAgeRef = useRef();

  const rangeComp = { minVal: 18, maxVal: 60, stepVal: 1, rangeLabel: "Age" };

  const addNewBtnHndlr = (e) => {
    e.preventDefault();

    const addData = {
      userName: userNameRef.current.value,
      userEmail: useEmailRef.current.value,
      userAge: useAgeRef.current.value,
    };

    /*
    axios
      .post("http://localhost:8080/smaster-home/welcome/addNewUser", addData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
       */
    const url = "http://localhost:8080/smaster-home/users/addNewUser";
    const reqOption = {
      method: "POST",
      body: JSON.stringify(addData),
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, reqOption)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="card" style={{ width: 600 }}>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="test-user-01"
              ref={userNameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's email"
              ref={useEmailRef}
            />
          </div>
          <div className="mb-3">
            <RangeSelector
              minVal={18}
              maxVal={60}
              stepVal={1}
              rangeLabel="Age"
              ref={useAgeRef}
            ></RangeSelector>
          </div>
          <div className="mb-3">
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
    </>
  );
};

export default AddNewUser;
