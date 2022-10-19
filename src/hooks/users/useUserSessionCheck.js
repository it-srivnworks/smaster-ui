import React from "react";
import { useHistory } from "react-router-dom";

const useUserSessionCheck = () => {
    const history = useHistory();
    
    const isLoginExist = () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn != null && loggedIn == 1) {
      history.replace("/welcome/home");
    } else {
      history.replace("/welcome/login");
    }
  };

  return {isLoginExist};
};

export default useUserSessionCheck;
