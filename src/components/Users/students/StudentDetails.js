import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../../assets/images/srivn_logo.png";
import useHttpGETParam from "../../../hooks/common/useHttpGETParam";
import DatePicker from "react-datepicker";

const StudentDetails = () => {
  const userEmail = sessionStorage.getItem("userEmail");
  const { sendGETParamReq: getUserDetails } = useHttpGETParam();
  const [userDetails,setUserDetails] = useState([])

  const processResp = (statusCode, data) => {
    console.log(JSON.stringify(data));
    setUserDetails(data);
  };

  const loadData = () => {
    const url =
      "http://localhost:8080/smaster-home/users/students/getStudentDetials";
      getUserDetails(url, { userEmail: userEmail }, processResp);
  };

  useEffect(() => {
    loadData();
  },
    []);

  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <img
                      className="profile-user-img img-fluid img-circle"
                      src={logo}
                      alt="User profile picture"
                    />
                  </div>
                  <h4 className="profile-username text-center">{userDetails.firstName}&nbsp;{userDetails.lastName}</h4>
                  <p className="text-muted text-center">{userDetails.userEmail}</p>
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
