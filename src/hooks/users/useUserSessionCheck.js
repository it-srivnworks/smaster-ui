import React from "react";
import { useHistory } from "react-router-dom";

const useUserSessionCheck = () => {
    console.log('useUserSessionCheck')
    const history = useHistory();
    
    const isLoginExist = () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn != null && loggedIn == 1) {//<TODO> Add token validation
      history.replace("/app/welcome");
    } else {
      history.replace("/app/login");
    }
  };

  return {isLoginExist};
};

export default useUserSessionCheck;
