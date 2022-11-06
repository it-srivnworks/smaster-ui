import React from "react";
import { useSelector } from "react-redux";
import StudentDetails from "./students/StudentDetails";

const UserHome = () => {
  console.log("--UserHome");
  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">User Details</h1>
      </div>
      <StudentDetails></StudentDetails>
    </>
  );
};

export default UserHome;
