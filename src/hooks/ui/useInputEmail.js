import React, { useState } from "react";
import useHttpGETParam from "../common/useHttpGETParam";
import * as AppConstants from "../../reduxstore/AppConstants";

const useInputEmail = () => {
  console.log("--useInputEmail01");
  const [inputVal, setInputVal] = useState("");
  const [isValError, setIsValError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [bckEndError, setBckEndError] = useState(true);
  const [bckEndMsg, setBckEndMsg] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const {
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

  const resetField = () => {
    setInputVal("")
    setIsValError(true)
    setErrorMsg("")
    setBckEndError(true)
    setBckEndMsg("")
    setIsTouched(false)
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

  const processResp = (statusCode, data) => {
    if(statusCode == AppConstants.HTTP_OK){
    let respS = data.statusCode
    console.log(statusCode)
    if(respS == AppConstants.HTTP_IM_USED){
      setBckEndMsg("Email Already Used!");
      setBckEndError(true)
    } else if (respS == AppConstants.HTTP_NOT_FOUND){
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
    checkEmailBE(url, { userEmail : emailVal }, processResp);
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
    checkBckEnd,
    resetField,
  };
};

export default useInputEmail;
