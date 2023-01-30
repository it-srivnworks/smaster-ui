import React from 'react'

const useHttpPUT = () => {
    const sendPUTReq = async (url, reqData, processRespData) => {
        const reqOption = {
          method: "PUT",
          body: JSON.stringify(reqData),
          headers: { "Content-Type": "application/json" },
        };
    
        let respCode = 0;
        console.log("sendPUTReq : "+JSON.stringify(reqData));
        fetch(url, reqOption)
        .then((res) => {
          console.log("sendPUTReq : "+url);
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
    
      return {sendPUTReq };
}

export default useHttpPUT
