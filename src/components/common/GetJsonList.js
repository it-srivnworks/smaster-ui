import React, { useCallback, useEffect, useState } from "react";
import UserInfoTable from "../Users/UserInfoTable";
import useHttpGET from "../../hooks/useHttpGET";

const GetJsonList = (props) => {
  console.log("----GetJsonList");
  const { isloaded, respData, respError } = useHttpGET(props.url);

  const [cnt, scnt] = useState(0);
  const toggleBtn = () => {
    scnt(cnt+1)
  };

  return (
    <>
        {cnt}
      <button onClick={toggleBtn}>ADD</button>
      {isloaded && <UserInfoTable userData={respData}></UserInfoTable>}
      {!isloaded && <h4>Loading Data...</h4>}
    </>
  );
};

export default GetJsonList;
