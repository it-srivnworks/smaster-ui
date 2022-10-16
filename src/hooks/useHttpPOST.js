import React, { useState } from "react";

const useHttpPOST = () => {
  const [isResploaded, setIsResploaded] = useState(false);
  const [respError, setRespError] = useState(null);
  const [respMessage,setRespMessage] = useState();

  const sendPostReq = async (url, reqData, processRespData) => {
    const reqOption = {
      method: "POST",
      body: JSON.stringify(reqData),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, reqOption)
      .then((res) => {
        console.log("post url : ..........." + isResploaded);
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setIsResploaded(true);
        setRespMessage(data.message);
        processRespData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setRespError(error);
      });
  };

  return { isResploaded , respMessage ,respError, sendPostReq };
};

export default useHttpPOST;
