import * as AppConstants from "../../reduxstore/AppConstants";

const useHttpGETParamBytes = () => {
  console.log("useHttpGETParam");
  const sendGETParamReq = async (url, reqParam,processRespData) => {
    url = url + "?" + new URLSearchParams(reqParam).toString();
    let respCode = 0;

    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETParamReq url: " + url);
        respCode = res.status;
        return res.blob();
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

export default useHttpGETParamBytes;
