import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import UserInfoTable from "../Users/UserInfoTable";
import useHttpGET from "../../hooks/common/useHttpGET";

const GetJsonList = (props) => {
  console.log("----GetJsonList");

  const {
    isReqComplete,
    respData,
    respError,
    sendGETReq: getUserInfo,
  } = useHttpGET();

  const respFun = () => {
    console.log("Response Data");
    console.log(isReqComplete);
    console.log(respData);
    console.log(respError);
  };

  const refreshData = () => {
    getUserInfo(props.url, respFun);
  };

  useEffect(() => {
    refreshData();
  }, [props.reloadListToggle]);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={refreshData}>
        Refresh Data{props.counter}
      </button>
      {respData.statusCode == 200 && (
        <UserInfoTable userData={respData.data}></UserInfoTable>
      )}
      {respData.statusCode != 200 && <h4>No Data Found !</h4>}
    </>
  );
};

export default GetJsonList;
