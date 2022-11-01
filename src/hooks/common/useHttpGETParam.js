import React, { useEffect, useState } from "react";

const useHttpGETParam = () => {
  const [isResComplete, setResComplete] = useState(false);
  const [respData, setRespData] = useState([]);
  const [respError, setError] = useState(null);

  const sendGETParamReq = async (url, reqParam) => {
    url = url + "?" + new URLSearchParams(reqParam).toString();
    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETParamReq ........: " + url);
        return res.json();
      })
      .then((data) => {
        setRespData(data);
        setError(null);
        setResComplete(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setRespData([]);
        setError(error);
        setResComplete(true);
      });
  };

  
  return { isResComplete, respData, respError, sendGETParamReq };
};

export default useHttpGETParam;
