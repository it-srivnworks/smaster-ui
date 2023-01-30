import React, { useState } from 'react'
import validator from 'validator'

const useInputURL = () => {
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
        }else if(!validator.isURL(data)){
            setIsValError(true)
            setErrorMsg('Is Not Valid URL')
        }else{
            setIsValError(false)
        }
    }

    return {inputVal,isValError,errorMsg,valChangeH,resetField}
}

export default useInputURL
