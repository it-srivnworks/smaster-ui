import React, { useState } from 'react'

const useInputTxt = (minLen) => {
  
    const [inputVal,setInputVal] = useState('')
    const [isValError,setIsValError] = useState(true)
    const [errorMsg,setErrorMsg] = useState('')
    const [isTouched,setIsTouched] = useState(false)
    
    const valChangeH = (e) =>{
        setInputVal(e.target.value)
        validateInput(e.target.value)
    }

    const inputBlurH = (e) =>{
        e.preventDefault();
        setIsTouched(true)
    }

    const resetField = (e) =>{
        setInputVal('')
        setIsValError(true)
        setErrorMsg('')
        setIsTouched(false)
    }

    const validateInput = (data) =>{
        setIsTouched(true);
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

    return {inputVal,isValError, errorMsg,isTouched, minLen,valChangeH,inputBlurH,resetField}
}

export default useInputTxt
