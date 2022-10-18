import React from 'react'
import HeaderPage from './HeaderPage'
import MainPage from './MainPage'
import Tester from '../test/Tester'
import { Provider } from 'react-redux'
import store from '../../reduxstore/appStore'

const HomePage = () => {
  console.log("--HomePage");
  return (
    <>
      <HeaderPage title='Smaster'></HeaderPage>
      <Provider store={store}><MainPage></MainPage></Provider>
      {/*<Tester></Tester>*/}
    </>
  )
}

export default HomePage
