import React, { useEffect, useState } from "react";
import GetJsonList from "../common/GetJsonList";

const ViewUserInfo = () => {
  console.log("----ViewUserInfo");

  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);

  console.log(flag)
  return (
    <>
      <p>Value : {count}</p>
      <button onClick={()=>{setFlag(!flag)}}>Button</button>
      <GetJsonList url="http://localhost:8080/smaster-home/users/getAllUserInfo"></GetJsonList>
    </>
  );
};

export default ViewUserInfo;
