import React, { useEffect, useState } from "react";
import { stringify } from "query-string";

const useHttpGETParam = () => {
  const [isResComplete, setResComplete] = useState(false);
  const [respData, updateRespData] = useState([]);
  const [respError, setError] = useState(null);

  const sendGETParamReq = async (url, reqParam) => {
    url = url + "?" + new URLSearchParams(reqParam).toString();
    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETReq : " + url);
        return res.json();
      })
      .then((data) => {
        updateRespData(data);
        setResComplete(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
        setResComplete(true);
      });
  };

  
  return { isResComplete, respData, respError, sendGETParamReq };
};

export default useHttpGETParam;
