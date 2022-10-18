import React from 'react'
import { useSelector } from 'react-redux'

const Tester = () => {
console.log('----Tester')    
const counter = useSelector(state => state.addUserReducer.addUserCounter)
  return (
    <div>
      Tester : {counter}
    </div>
  )
}

export default Tester
