import React, { useState } from 'react'

const useInputTxt = () => {
  
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
        }else if(data.trim().length  < 4){
            setIsValError(true)
            setErrorMsg('Minumum 4 characters!')
        }else{
            setIsValError(false)
        }
    }

    return {inputVal,isValError,errorMsg,valChangeH,inputBlurH,resetField}
}

export default useInputTxt
