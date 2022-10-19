import React, { useEffect } from 'react'
import useUserSessionCheck from '../../hooks/users/useUserSessionCheck';
import HeaderPage from './HeaderPage'
import MainPage from './MainPage'

const HomePage = () => {
  console.log("--HomePage");

  const { isLoginExist: checkIsLogin } = useUserSessionCheck();
  useEffect(() => {
    console.log("Login...");
    checkIsLogin();
  }, []);

  return (
    <>
      <HeaderPage title='Smaster'></HeaderPage>
      <MainPage></MainPage>
    </>
  )
}

export default HomePage
