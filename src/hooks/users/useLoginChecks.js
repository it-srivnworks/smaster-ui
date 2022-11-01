import React, { useEffect, useState } from "react";
import * as AppConstants from "../../reduxstore/AppConstants";
import useHttpGETParam from "../common/useHttpGETParam";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../reduxstore/authStore";
import * as approutes from "../../reduxstore/AppRoutes";

const useLoginChecks = () => {
  console.log("--useLoginChecks");
  const [respSCode, setRespSCode] = useState("");
  const [respMsg, setRespMsg] = useState("");
  const [inputData, setInputData] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const {
    isResComplete,
    respData,
    respError,
    sendGETParamReq: sendVal,
  } = useHttpGETParam();

  const checkEmail = (dataVal) => {
    console.log("checkVal" + dataVal);
    const url = "http://localhost:8080/smaster-home/users/getEmail";
    const params = { userEmail: dataVal };
    setInputData(dataVal);
    sendVal(url, params);
  };

  const resetField = (e) => {
    setRespSCode("");
    setRespMsg("");
  };

  const processResponse = () => {
    if (isResComplete) {
      console.log("Processing Response:");
      if (respError != null && respError == "TypeError: Failed to fetch") {
        setRespSCode(AppConstants.STATUS_ERROR);
        setRespMsg("Connection Issue");
      } else {
        if (respData.statusCode === AppConstants.HTTP_IM_USED) {
          setRespSCode(AppConstants.STATUS_OK);
          successLogin();
        } else {
          setRespSCode(AppConstants.STATUS_ERROR);
          setRespMsg("Email doesnot exist !");
        }
      }
    } else {
      console.log("Awaiting Response..");
    }
  };

  const successLogin = () => {
    console.log("successLogin");
    dispatch(authActions.loggIn({ userEmail : inputData }));
    history.replace(approutes.app_home);
  };

  useEffect(() => {
    processResponse();
  }, [respData, respError]);
  return { respSCode, respMsg, checkEmail, resetField };
};

export default useLoginChecks;
