import React, { useState } from "react";

const useInputPassword = () => {
  console.log("--useInputPassword");
  const [passwordVal, setPasswordVal] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const valChangeH = (e) => {
    e.preventDefault();
    setPasswordVal(e.target.value);
    validatePassword(e.target.value);
  };

  const inputBlurH = (e) => {
    e.preventDefault();
    setIsTouched(true);
  };

  const toggleDisplay = (e) => {
    setShowPassword(!showPassword)
  }

  const resetField = (e) => {
    setPasswordVal("");
    setIsPasswordError(true);
    setErrorMsg("");
    setIsTouched(false);
  };

  const validatePassword = (data) => {
    setIsTouched(true);
    if (data.trim().length == 0) {
      setIsPasswordError(true);
      setErrorMsg("Password cannot be empty!");
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/i.test(data)) {
      setIsPasswordError(true);
      setErrorMsg("Invalid Password Format!");
    } else {
      setIsPasswordError(false);
    }
  };

  return {
    passwordVal,
    isPasswordError,
    isTouched,
    errorMsg,
    showPassword,
    valChangeH,
    inputBlurH,
    toggleDisplay,
    resetField,
  };
};

export default useInputPassword;
