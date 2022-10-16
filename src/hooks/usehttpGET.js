import React, { useCallback, useEffect, useState } from "react";

const useHttpGET = (url) => {
  const [isloaded, setIsLoaded] = useState(false);
  const [respData, updateRespData] = useState([]);
  const [respError, setError] = useState(null);

  useEffect(() => {
    console.log("Start Loading Data");
    fetch(url, { method: "GET" })
      .then((res) => {
        console.log("url : ..........." + url);
        return res.json();
      })
      .then((data) => {
        updateRespData(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
      });
  }, [url]);

  return { isloaded, respData, respError };
};

export default useHttpGET;
