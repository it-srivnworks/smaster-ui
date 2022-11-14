import React from "react";
import { useSelector } from "react-redux";
import SingleImageUpload from "../common/SingleImageUpload";
import StudentDetails from "./students/StudentDetails";

const UserHome = () => {
  console.log("--UserHome");
  
  return (
    <>
      {/*<StudentDetails></StudentDetails>*/}
      <SingleImageUpload></SingleImageUpload>
    </>
  );
};

export default UserHome;
