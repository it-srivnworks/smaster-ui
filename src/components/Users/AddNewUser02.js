import React, { useRef } from "react";
import { useReducer } from "react";
import RangeSelector01 from "../common/RangeSelector01";
import RangeSelector02 from "../common/RangeSelector02";

const AddNewUser02 = () => {
  console.log("--AddNewUser--02--");

  const initFormData = {
    userName: "",
    userEmail: "",
  };
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case "Input_TXT":
        return { ...state, [action.field]: action.data };
      case "Input_RANGE":
        return { ...state, [action.field]: action.data };
      default:
        return { state };
    }
  };
  const [formData, dispatcher] = useReducer(formReducer, initFormData);

  const formTextChangeHndlr = (e) => {
    dispatcher({
      type: "Input_TXT",
      field: e.target.name,
      data: e.target.value,
    });
  };

  const formRangeChangeHndlr = (x, y) => {
    dispatcher({
      type: "Input_RANGE",
      field: x,
      data: y,
    });
  };

  const addNewBtnHndlr = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="card" style={{ width: 600 }}>
        <div className="card-body"></div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="test-user-01"
            name="userName"
            value={formData.userName}
            onChange={formTextChangeHndlr}
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
            name="userEmail"
            value={formData.userEmail}
            onChange={formTextChangeHndlr}
          />
        </div>
        <div className="mb-3">
          <RangeSelector02
            minVal={18}
            maxVal={60}
            stepVal={1}
            rangeLabel="Age"
            name="userAge"
            formRangeChangeHndlr={formRangeChangeHndlr}
          ></RangeSelector02>
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
    </>
  );
};

export default AddNewUser02;
