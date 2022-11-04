import React, { useState } from "react";
import useHttpGETParam from "../common/useHttpGETParam";
import * as AppConstants from "../../reduxstore/AppConstants";

const useInputEmail = () => {
  console.log("--useInputEmail01");
  const [inputVal, setInputVal] = useState("");
  const [isValError, setIsValError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [bckEndMsg, setBckEndMsg] = useState("");
  const [bckEndError, setBckEndError] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const {
    isResComplete,
    respData,
    respError,
    sendGETParamReq: checkEmailBE,
  } = useHttpGETParam();
  
  const valChangeH = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
    validateInput(e.target.value);
  };

  const inputBlurH = (e) => {
    e.preventDefault();
    setIsTouched(true);
  };

  const resetField = (e) => {
    setInputVal("")
    setIsValError(true)
    setErrorMsg("")
    setIsTouched(false)
    setBckEndMsg("")
    setBckEndError(true)
  };

  
  const validateInput = (data) => {
    setIsTouched(true);
    if (data.trim().length == 0) {
      setIsValError(true);
      setErrorMsg("Input cannot be empty!");
      setBckEndMsg("");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data)) {
      setIsValError(true);
      setErrorMsg("Invalid Email Format!");
      setBckEndMsg("");
    } else {
      setIsValError(false);
    }
  };

  const respFun = (statusCode, data) => {
    if(statusCode == AppConstants.HTTP_OK){
    let respS = data.statusCode
    console.log(statusCode)
    if(respS == AppConstants.HTTP_IM_USED){
      setBckEndMsg("Email Already Used!");
      setBckEndError(true)
    } else if (respS == AppConstants.HTTP_DATNOTFOUND){
      setBckEndMsg("Email donot exist. OK to use!");
      setBckEndError(false)
    }else{
      setBckEndMsg("Unknown Error Please Retry!");
      setBckEndError(false)
    } 
    }else{
      setBckEndMsg("Unknown Error Please Retry!");
      setBckEndError(false)
    }
  }

  const checkBckEnd = (emailVal) => {
    const url = "http://localhost:8080/smaster-home/users/checkUserByEmail";
    checkEmailBE(url, { userEmail : emailVal }, respFun);
  };

  return {
    inputVal,
    isValError,
    errorMsg,
    bckEndError,
    bckEndMsg,
    isTouched,
    valChangeH,
    inputBlurH,
    resetField,
    checkBckEnd,
  };
};

export default useInputEmail;
