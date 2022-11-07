import React from "react";
import { useSelector } from "react-redux";
import StudentDetails from "./students/StudentDetails";

const UserHome = () => {
  console.log("--UserHome");
  
  return (
    <>
      <StudentDetails></StudentDetails>
    </>
  );
};

export default UserHome;
