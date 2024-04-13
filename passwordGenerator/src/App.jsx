import { useState } from 'react'
import './App.css'

function App() {
  const [passLength, setpassLength] = useState(0);
  

  return (
    <>
      <h1 className='text-4xl text-white'>Password Generator</h1>
    </>
  )
}

export default App
