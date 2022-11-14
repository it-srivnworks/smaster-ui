import * as AppConstants from "../../reduxstore/AppConstants";
import axios from "axios";
import { useState } from "react";

const useHttpPOSTFile = () => {
  console.log("useHttpPOSTFile");
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const sendPOSTFileReq = async (url, reqData, processRespData) => { 
    //setIsLoading(true);
    var formData = new FormData();
    formData.append('image', reqData);
    //formData.append('userEmail', 'test@srivn.com');
    
    const config = {
        onUploadProgress : function(progressEvent) {
          const prctg = Math.round((progressEvent.loaded/progressEvent.total)*100)
          setProgress(prctg)
          if(prctg == 100){
            console.log('completed')
          }
        }
    }

    let respCode = 0;
    url = 'https://httpbin.org/post'
    axios.post(url, formData, config).then((res) => {
      console.log("sendPOSTFileReq File url: "+url);
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

  {/*
  const sendPOSTFileReq = async (url, reqData, processRespData) => {
    var formData = new FormData();
    formData.append('file', reqData);
    formData.append('userEmail', 'test@srivn.com');
    const reqOption = {
      method: "POST",
      body: formData,
     // headers: { "Content-Type": "multipart/form-data" },
    };
    let respCode = 0;
    
    fetch(url, reqOption)
    .then((res) => {
      console.log("sendPOSTFileReq File url: "+url);
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
*/}
  return {sendPOSTFileReq, progress};
};

export default useHttpPOSTFile;
