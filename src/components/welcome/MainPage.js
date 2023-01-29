import React from 'react'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  console.log("-MainPage");

  return (
    <>
    <div className="main-panel">
       <Outlet></Outlet>
    </div>   
    </>
  )
}

export default MainPage
