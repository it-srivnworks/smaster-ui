import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import GetJsonList from "../common/GetJsonList";

const ViewUserInfo = (props) => {
  console.log("----ViewUserInfo");

  return (
    <>
      <GetJsonList url="http://localhost:8080/smaster-home/users/getAllUserInfo"></GetJsonList>
    </>
  );
};

export default ViewUserInfo;
