import React, { useRef, useState } from "react";
import AddNewUser from "../Users/AddNewUser";
import ViewUserInfo from "../Users/ViewUserInfo";

const MainPage = () => {
  console.log("---MainPage--");
  const [reloadListToggle,setReloadListToggle] = useState(false)

  return (
    <>
      <div className="main-panel">
        <AddNewUser reloadListToggle={reloadListToggle} setReloadListToggle={setReloadListToggle}></AddNewUser>
        <ViewUserInfo reloadListToggle={reloadListToggle}></ViewUserInfo>
      </div>
    </>
  );
};

export default MainPage;
