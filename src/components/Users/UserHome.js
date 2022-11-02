import React from 'react'
import { useSelector } from "react-redux";

const UserHome = () => {
  console.log('--UserHome')
  const user = useSelector(state => state.auth.userLogin.userEmail)

  return (
    <div>
      UserHome! {user}
    </div>
  )
}

export default UserHome
