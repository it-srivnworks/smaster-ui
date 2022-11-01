import React, { useState,useRef } from 'react'
import RangeSelector01 from '../common/RangeSelector01';
import axios from "axios";


const AddNewUser01 = () => {
    console.log("--AddNewUser01--");

    const [inputData,setInputData] = useState({
      userName: '',
      userEmail: ''
    })
  
    const userAgeRef = useRef()

    const addNewBtnHndlr = (e) => {
      e.preventDefault();
  
      const data = {...inputData, userAge: userAgeRef.current.value}

      console.log(data)
      axios
        .post("http://localhost:8080/smaster-home/welcome/addNewUser", data)
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
                value={inputData.userName}
                onChange={(e)=>{setInputData({...inputData, userName : e.target.value})}}
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
                value={inputData.userEmail}
                onChange={(e)=>{setInputData({...inputData, userEmail : e.target.value})}}
              />
            </div>
            <div className="mb-3">
              <RangeSelector01
                minVal={18}
                maxVal={60}
                stepVal={1}
                rangeLabel="Age"
                ref={userAgeRef}
              ></RangeSelector01>
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

export default AddNewUser01
