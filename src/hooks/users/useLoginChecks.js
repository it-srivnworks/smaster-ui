import React, { useEffect, useState } from "react";
import * as AppConstants from "../../reduxstore/AppConstants";
import useHttpGETParam from "../common/useHttpGETParam";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../reduxstore/authStore";
import * as approutes from "../../reduxstore/AppRoutes";
import useHttpPOST from "../common/useHttpPOST";

const useLoginChecks = () => {
  console.log("--useLoginChecks");
  const [respComplete, setRespComplete] = useState(true);
  const [respCode, setRespCode] = useState(1);
  const [respMsg, setRespMsg] = useState("");
  
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    sendPOSTReq: postSendVal
  } = useHttpPOST();
  
  const postRespFunc = (statusCode,data) => {
    console.log('Post Response complete!')
    setRespComplete(true)
    if(statusCode == AppConstants.HTTP_OK){
      successLogin(data)
    }else if(statusCode == AppConstants.HTTP_UNAUTHORIZED){
      setRespCode(AppConstants.STATUS_ERROR);
      setRespMsg(data.message);
    }else if(statusCode == AppConstants.HTTP_BAD_GATEWAY){
      setRespCode(AppConstants.STATUS_ERROR);
      setRespMsg(data.message);
    }else{
      setRespCode(AppConstants.STATUS_ERROR);
      setRespMsg("Unknown Error Please Retry!");
    }
  }

  const checkLogin = (dataEmail,dataPwd) => {
    setRespComplete(false)
    console.log("dataEmail" + dataEmail);
    console.log("dataPwd" + dataPwd);
    const url = "http://localhost:8080/smaster-home/useradmin/authenticate";
    const postData = {
      userEmail: dataEmail,
      userPassword: dataPwd
    };
    postSendVal(url,postData,postRespFunc)
  }

  const resetField = (e) => {
    setRespCode("");
    setRespMsg("");
  };

  const successLogin = (data) => {
    console.log("successLogin");
    dispatch(authActions.loggIn({ userEmail : data.userEmail, userToken: data.token }));
    history.replace(approutes.app_home);
  };

  return { respComplete, respCode, respMsg, checkLogin, resetField };
};

export default useLoginChecks;
