import * as AppConstants from "../../reduxstore/AppConstants";

const useHttpGETParam = () => {

  const sendGETParamReq = async (url, reqParam,processRespData) => {
    url = url + "?" + new URLSearchParams(reqParam).toString();
    
    let respCode = 0;

    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETParamReq ........: " + url);
        respCode = res.status;
        return res.json();
      })
      .then((data) => {
        processRespData(respCode,data)
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error != null && error == "TypeError: Failed to fetch") {
          processRespData(AppConstants.HTTP_BAD_GATEWAY,{statusCode: 503, message : "Connection Issue!"})
        }else{
          processRespData(respCode,error)
        }
      });
  };

  
  return { sendGETParamReq };
};

export default useHttpGETParam;
