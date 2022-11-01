import React from 'react'
import { useSelector } from "react-redux";

const Tester = () => {
console.log('--Tester')    
const loggedIn = useSelector(state => state.auth.loggedIn)
const userEmail = useSelector(state => state.auth.userLogin.userEmail)

  return (
    <div>
      Tester! {loggedIn} ; {userEmail}
    </div>
  )
}

export default Tester
