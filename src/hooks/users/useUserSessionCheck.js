import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useUserSessionCheck = () => {
    console.log('useUserSessionCheck')
    const history = useHistory();
    
    const isLoginExist = () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    const userEmail = sessionStorage.getItem("userEmail");
    const userToken = sessionStorage.getItem("userToken");
      
    if (loggedIn != null && loggedIn == 1 && userEmail != null && userToken != null) {
      history.replace("/app/welcome");
    } else {
      history.replace("/app/login");
    }
  };

  

  return {isLoginExist};
};

export default useUserSessionCheck;
