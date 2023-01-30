import React, { useState } from 'react'

const useInputTxt = (minLen) => {
  
    const [inputVal,setInputVal] = useState('')
    const [isValError,setIsValError] = useState(false)
    const [errorMsg,setErrorMsg] = useState('')
  
    const valChangeH = (e) =>{
        setInputVal(e.target.value)
        validateInput(e.target.value)
    }

    const resetField = (e) =>{
        setInputVal('')
        setIsValError(false)
        setErrorMsg('')
    }

    const validateInput = (data) =>{
        if(data.trim().length  == 0){
            setIsValError(true)
            setErrorMsg('Input cannot be empty!')
        }else if(data.trim().length  < minLen){
            setIsValError(true)
            setErrorMsg('Minumum '+minLen+' characters!')
        }else{
            setIsValError(false)
        }
    }

    return {inputVal,isValError,errorMsg,valChangeH,resetField}
}

export default useInputTxt
