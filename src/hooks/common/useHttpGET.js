import * as AppConstants from "../../reduxstore/AppConstants";

const useHttpGET = () => {
  console.log("useHttpGET");
  let respCode = 0;

  const sendGETReq = async (url,processRespData) => {
    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETReq url :" + url);
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

  return {sendGETReq};
};

export default useHttpGET;
