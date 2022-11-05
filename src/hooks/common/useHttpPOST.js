import * as AppConstants from "../../reduxstore/AppConstants";

const useHttpPOST = () => {
  console.log("useHttpPOST");
  const sendPOSTReq = async (url, reqData, processRespData) => {
    const reqOption = {
      method: "POST",
      body: JSON.stringify(reqData),
      headers: { "Content-Type": "application/json" },
    };
    let respCode = 0;
    
    fetch(url, reqOption)
    .then((res) => {
      console.log("sendPostReq url: "+url);
      respCode = res.status;
      return res.json();
    }).then((data) => {
        processRespData(respCode,data)
    }).catch((error) => {
        console.error("Error:", error);
        if (error != null && error == "TypeError: Failed to fetch") {
          processRespData(AppConstants.HTTP_BAD_GATEWAY,{statusCode: 503, message : "Connection Issue!"})
        }else{
          processRespData(respCode,error)
        }
        
      });
  };

  return {sendPOSTReq };
};

export default useHttpPOST;
