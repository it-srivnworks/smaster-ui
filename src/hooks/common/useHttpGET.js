import * as AppConstants from "../../reduxstore/AppConstants";

const useHttpGET = () => {
  
  let respCode = 0;

  const sendGETReq = async (url, processRespData) => {
    console.log("Start Loading Data");
    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETReq url :" + url);
        respCode = res.status;
        return res.json();
    })
      .then((data) => {
        processRespData(respCode,data);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error != null && error == "TypeError: Failed to fetch") {
          processRespData(AppConstants.HTTP_BAD_GATEWAY,{statusCode: AppConstants.HTTP_BAD_GATEWAY, message : "Connection Issue!"})
        }else{
          processRespData(respCode,error)
        }
      });
  };

  return { sendGETReq };
};

export default useHttpGET;
