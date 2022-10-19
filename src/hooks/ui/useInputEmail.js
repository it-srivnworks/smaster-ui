import React, { useState } from "react";

const useInputEmail = () => {
  console.log("--useInputEmail01");
  const [inputVal, setInputVal] = useState("");
  const [isValError, setIsValError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isTouched, setIsTouched] = useState(false);

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
    setInputVal("");
    setIsValError(false);
    setErrorMsg("");
    setIsTouched(false);
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

  return {
    inputVal,
    isValError,
    isTouched,
    errorMsg,
    valChangeH,
    inputBlurH,
    resetField,
  };
};

export default useInputEmail;
