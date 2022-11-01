import React from "react";
import { useHistory } from "react-router-dom";

const useUserSessionCheck = () => {
    const history = useHistory();
    
    const isLoginExist = () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn != null && loggedIn == 1) {
      history.replace("/app/welcome");
    } else {
      history.replace("/app/login");
    }
  };

  return {isLoginExist};
};

export default useUserSessionCheck;
