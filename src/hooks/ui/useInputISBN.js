import React, { useState } from 'react'

const useInputISBN = (minLen,maxLen) => {
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

    const isValidISBN = (isbn) =>{
        let n = isbn.length;
        if (n != 10)
            {return false;}
        // Computing weighted sum of
        // first 9 digits
        let sum = 0;
        for (let i = 0; i < 9; i++)
        {
            let digit = isbn[i] - '0';
            if (0 > digit || 9 < digit)
                {return false;}
            sum += (digit * (10 - i));
        }
        // Checking last digit.
        let last = isbn[9];
        if (last != 'X' && (last < '0' || last > '9'))
            {return false;}
        // If last digit is 'X', add 10
        // to sum, else add its value.
        sum += ((last == 'X') ? 10 : (last - '0'));
        // Return true if weighted sum
        // of digits is divisible by 11.
        return (sum % 11 == 0);
    }

    const validateISBN = () =>{
        if(!isValidISBN(inputVal)){
            setIsValError(true)
            setErrorMsg('Invalid ISBN format')   
        }
    }

    const validateInput = (data) =>{
        if(data.trim().length  == 0){
            setIsValError(true)
            setErrorMsg('Input cannot be empty!')
        }else if(data.trim().length  < minLen){
            setIsValError(true)
            setErrorMsg('Minumum '+minLen+' characters!')
        }else if(data.trim().length  > maxLen){
            setIsValError(true)
            setErrorMsg('Maximum '+maxLen+' characters!')
        }else{
            setIsValError(false)
        }
    }

    return {inputVal,isValError,errorMsg, minLen, maxLen,valChangeH,resetField,validateISBN}
}

export default useInputISBN
