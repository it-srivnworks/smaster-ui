import React, { useEffect, useState } from "react";
import useHttpGETParam from "../common/useHttpGETParam";

const useInputEmail = () => {
  const [inputVal, setInputVal] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValError, setIsValError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const valChangeH = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
    validateInput(e.target.value);
  };

  const inputBlurH = (e) => {
    e.preventDefault();
    setIsTouched(true);
  };

  const resetField = (e) =>{
    setInputVal('')
    setIsTouched(false)
    setIsValError(false)
    setErrorMsg('')
}

  const checkFromBackEnd = () => {
    console.log("Checking from Back End" + inputVal);
    checkEmail(
      "http://localhost:8080/smaster-home/users/getEmail",
      { userEmail: inputVal }
    );
  };

  const respFunc = () => {
    if (respError != null) {
      console.log("respError" + respError);
    } else if (respData != null) {
      setIsValError(true);
      setErrorMsg(respData.message);
    }else{
      setIsValError(true);
      setErrorMsg('Error');
    }
  };

  const validateInput = (data) => {
    if (data.trim().length == 0) {
      setIsValError(true);
      setErrorMsg("Input cannot be empty!");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data)) {
      setIsValError(true);
      setErrorMsg("Invalid Email Format!");
    } else {
      setIsValError(false);
      setIsTouched(true);
    }
  };

  const {
    isResComplete,
    respData,
    respError,
    sendGETParamReq: checkEmail,
  } = useHttpGETParam();

  useEffect(()=>{
    if (respError != null) {
      setIsValError(true);
      setErrorMsg(respData.message);
    }else{
      if(respData.statusCode == 226 || respData.statusCode == 200){
        setIsValError(true);
        setErrorMsg(respData.message);
      }else{
        setIsValError(false);
      }
    }
  },[respData])
  
  return {
    inputVal,
    isValError,
    isTouched,
    errorMsg,
    valChangeH,
    inputBlurH,
    checkFromBackEnd,
    resetField
  };
};

export default useInputEmail;
