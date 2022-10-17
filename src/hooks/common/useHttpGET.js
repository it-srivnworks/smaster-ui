import React, { useCallback, useEffect, useState } from "react";

const useHttpGET = () => {
  const [isReqComplete, setIsReqComplete] = useState(false);
  const [respData, updateRespData] = useState([]);
  const [respError, setError] = useState(null);

  const sendGETReq = async (url,processRespData) => {
    console.log("Start Loading Data");
    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("sendGETReq url :" + url);
        return res.json();
      })
      .then((data) => {
        updateRespData(data);
        setIsReqComplete(true);
        processRespData()
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
        processRespData()
      });
  };

  return { isReqComplete, respData, respError , sendGETReq};
};

export default useHttpGET;
