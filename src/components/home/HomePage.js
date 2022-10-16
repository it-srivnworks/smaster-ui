import React from 'react'
import HeaderPage from './HeaderPage'
import MainPage from './MainPage'

const HomePage = () => {
  console.log("--HomePage");
  return (
    <>
      <HeaderPage title='Smaster'></HeaderPage>
      <MainPage></MainPage>
    </>
  )
}

export default HomePage
