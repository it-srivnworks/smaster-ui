import React, { useState } from "react";

const useHttpPOST = () => {
  const [isReqComplete, setIsReqComplete] = useState(false);
  const [respStatusCode, setRespStatusCode] = useState();
  const [respMessage, setRespMessage] = useState();
  const [respError, setRespError] = useState(null);

  const sendPOSTReq = async (url, reqData, processRespData) => {
    const reqOption = {
      method: "POST",
      body: JSON.stringify(reqData),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, reqOption)
    .then((res) => {
      console.log("sendPostReq : "+url);
      return res.json();
    }).then((data) => {
        setIsReqComplete(true);
        setRespStatusCode(data.statusCode)
        setRespMessage(data.message);
        processRespData()
    }).catch((error) => {
        console.error("Error:", error);
        setRespError(error);
        processRespData()
      });
  };

  return { isReqComplete , respStatusCode ,respMessage, respError, sendPOSTReq };
};

export default useHttpPOST;
