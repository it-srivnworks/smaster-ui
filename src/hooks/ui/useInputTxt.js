import React, { useState } from 'react'

const useInputTxt = (minLen) => {
  
    const [inputVal,setInputVal] = useState('')
    const [isTouched,setIsTouched] = useState(false)
    const [isValError,setIsValError] = useState(false)
    const [errorMsg,setErrorMsg] = useState('')
  
    const valChangeH = (e) =>{
        setInputVal(e.target.value)
        validateInput(e.target.value)
    }

    const inputBlurH = (e) =>{
        setIsTouched(true)
    }

    const resetField = (e) =>{
        setInputVal('')
        setIsTouched(false)
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

    return {inputVal,isValError,errorMsg, minLen,valChangeH,inputBlurH,resetField}
}

export default useInputTxt
