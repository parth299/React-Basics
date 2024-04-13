import React, { useState } from 'react'

const Generator = () => {
  const [passLength, setpassLength] = useState(0);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {

  }

  return (
    
    <div className=' w-[50%]'>
        <div className='flex  justify-evenly mt-10'>
         <input
          className='rounded-lg w-[70%]'
          type="text" 
          value={password}
          disabled 
        />  
        <button className='bg-blue-600 p-4 text-white rounded-lg'>COPY</button>
        </div>

        <div className="password-setters flex items-center justify-evenly">
          <div className='length-Slider m-6'>
            <input 
              type="range"
              min={8}
              max={100} 
              defaultValue={12}
              name='lengthSlider'
              onChange={generatePassword}
            />
            <label className='text-white mx-2' htmlFor="lengthSlider">Length : {password.length}</label>
          </div>
          <div className="isNumber">
            <input 
              type="checkbox" 
              value={isNumAllowed}
              name='is-num'
            />
            <label htmlFor="is-num" className='text-white mx-2'>Numbers</label>
          </div>
          <div className="isCharAllowed">
            <input 
              type="checkbox" 
              name="is-char" 
              value={isCharAllowed}
              // onChange={}
            />
            <label htmlFor="is-char" className='text-white mx-2'>Characters</label>
          </div>
        </div>
        
    </div>
  )
}

export default Generator