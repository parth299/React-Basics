import React, { useState, useEffect, useCallback, useRef } from 'react'

const Generator = () => {
  const [passLength, setpassLength] = useState(8);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwsyx";
    let char = "!@#$%^&*(){}[]";
    let num = "1234567890";

    if(isCharAllowed) str += char;
    if(isNumAllowed) str += num;

    // Now generate the password string
    for(let i=0; i<passLength; i++){
      // Generate the password of length passlength;
      let newChar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(newChar)
    }
    setPassword(pass);
  }, [passLength, isNumAllowed, isCharAllowed, setPassword])

  useEffect(() => {
    generatePassword();
  }, [passLength, isCharAllowed, isNumAllowed, generatePassword])
  

  return (
    
    <div className=' w-[50%] mt-20'>
        <div className='flex  justify-evenly'>
         <input
          className='rounded-lg w-[70%] px-5 text-blue-500 text-xl'
          type="text" 
          value={password}
          readOnly
          placeholder='password' 
          ref={passwordRef}
        />  
        <button onClick={() => {
          window.navigator.clipboard.writeText(password)
          passwordRef.current?.select();

        }} className='bg-blue-600 p-4 text-white rounded-lg'>COPY</button>
        </div>

        <div className="password-setters flex items-center justify-evenly mt-5">
          <div className='length-Slider m-6'>
            <input 
              type="range"
              min={6}
              max={100} 
              value={passLength}
              name='lengthSlider'
              onChange={(e) => (setpassLength(e.target.value))}
            />
            <label className='text-white mx-2' htmlFor="lengthSlider">Length : {passLength}</label>
          </div>
          <div className="isNumber">
            <input 
              type="checkbox" 
              value={isNumAllowed}
              name='is-num'
              onChange={() => (setIsNumAllowed(prev => !prev))}
            />
            <label htmlFor="is-num" className='text-white mx-2'>Numbers</label>
          </div>
          <div className="isCharAllowed">
            <input 
              type="checkbox" 
              name="is-char" 
              value={isCharAllowed}
              onChange={() => (setIsCharAllowed(prev => !prev))}
            />
            <label htmlFor="is-char" className='text-white mx-2'>Characters</label>
          </div>
        </div>
        
    </div>
  )
}

export default Generator