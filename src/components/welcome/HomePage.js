import React from 'react'
import HeaderPage from './HeaderPage';
import MainPage from './MainPage';

const HomePage = () => {
  console.log("-HomePage");
  
  return (
    <>
      <HeaderPage></HeaderPage>
      <MainPage></MainPage>
    </>
  )
}

export default HomePage
