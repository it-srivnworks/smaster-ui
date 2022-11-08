import React, { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../../assets/images/srivn_logo.png";
import useHttpGETParam from "../../../hooks/common/useHttpGETParam";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StudentDetails = () => {
  console.log("StudentDetails");
  const userEmail = sessionStorage.getItem("userEmail");
  const { sendGETParamReq: getUserDetails } = useHttpGETParam();
  const [editable, setEditable] = useState(true);
  const [userDetails, setUserDetails] = useState({
    dob: "01-Jan-2001",
    inDate: "25-Dec-2000",
    primaryAddress: {
      addressLine01: "",
      city: "",
      state: "",
      country: "UK",
      postCode: "",
      aaddressLine02: "",
    },
  });

  const processResp = (statusCode, data) => {
    setUserDetails(data);
  };

  function datetoStr(d) {
    let dateArr = d.toString().split(" ");
    let newDateStr = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[3];
    return newDateStr;
  }

  const changeDOB = (d) => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        dob: datetoStr(d),
      };
    });
  };

  const changeInDate = (d) => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        inDate: datetoStr(d),
      };
    });
  };

  const loadData = () => {
    const url =
      "http://localhost:8080/smaster-home/users/students/getStudentDetials";
    getUserDetails(url, { userEmail: userEmail }, processResp);
  };

  const updateData = () => {
    console.log(userDetails);
    if (!editable) {
      console.log("Saving to Server");
    } else {
      setEditable(!editable);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>&nbsp;</h1>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <img
                      className="profile-user-img img-fluid img-circle"
                      src="../../dist/img/user4-128x128.jpg"
                      alt="User profile picture"
                    />
                  </div>
                  <div>
                    <h3 className="profile-username text-center">
                      {userDetails.firstName}&nbsp;{userDetails.lastName}
                    </h3>
                    <p className="text-muted text-center">Student</p>
                    <hr />
                    <div className="card-body">
                      <div className="form-group">
                        <strong>
                          <i className="fa-solid fa-envelope" /> Email
                        </strong>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email"
                          defaultValue={userDetails.userEmail}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <strong>
                          <i className="fa-regular fa-calendar-days" /> Date of
                          Birth
                        </strong>
                        <DatePicker
                          wrapperClassName="datePicker"
                          dateFormat="dd-MMM-yyyy"
                          selected={new Date(userDetails.dob)}
                          onChange={(d) => changeDOB(d)}
                          disabled={true}
                        />
                      </div>

                      <div className="form-group">
                        <strong>
                          <i className="fa-regular fa-calendar-days" /> Date of
                          Joining
                        </strong>
                        <DatePicker
                          wrapperClassName="datePicker"
                          dateFormat="dd-MMM-yyyy"
                          selected={new Date(userDetails.inDate)}
                          onChange={(d) => changeInDate(d)}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-row card-primary">
                <div className="card-header">
                  <h6 className="card-title">
                    <strong>Additonal Info</strong>
                  </h6>
                  <div className="card-tools">
                    {editable && (
                      <button
                        type="button"
                        className="btn btn-block btn-primary btn-sm"
                        onClick={updateData}
                      >
                        Edit
                      </button>
                    )}
                    {!editable && (
                      <button
                        type="button"
                        className="btn btn-block btn-primary btn-sm"
                        onClick={updateData}
                      >
                        Save
                      </button>
                    )}
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <strong>Address</strong>
                    <textarea
                      className="form-control"
                      rows={2}
                      defaultValue={userDetails.primaryAddress.addressLine01}
                      disabled={editable}
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <strong>City</strong>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userDetails.primaryAddress.city}
                          disabled={editable}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <strong>State</strong>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userDetails.primaryAddress.state}
                          disabled={editable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <strong>Country</strong>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userDetails.primaryAddress.country}
                          disabled={editable}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <strong>PostCode</strong>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userDetails.primaryAddress.postCode}
                          disabled={editable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <strong>Primary Guardian Email</strong>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={userDetails.primGuardianEmail}
                        disabled={editable}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <strong>Secondary Guardian Email</strong>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={userDetails.secnGuardianEmail}
                        disabled={editable}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDetails;
