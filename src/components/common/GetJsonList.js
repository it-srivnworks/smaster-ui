import React, { useCallback, useEffect, useState } from "react";
import UserInfoTable from "../Users/UserInfoTable";

const GetJsonList = (props) => {
  console.log("--?--GetJsonList");

  const [isloaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState(props.url);
  const [respData, updateRespData] = useState([]);
  const [cnt, scnt] = useState(0);

  const loadData = useCallback(() => {
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
      });
  }, []);

  useEffect(loadData, [props.url]);

  const toggleBtn = () => {
    scnt(cnt+1)
  };

  return (
    <>
        {cnt}
      <button onClick={toggleBtn}>ADD</button>
      {isloaded && <UserInfoTable userData={respData}></UserInfoTable>}
      {!isloaded && <h4>Loading Data...</h4>}
    </>
  );
};

export default GetJsonList;
