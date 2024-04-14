import './App.css'
import Generator from './components/Generator';

function App() {

  

  return (
    <>
    <div className='w-screen text-center'>
      <h1 className='text-6xl cursor-default text-white mt-20 font-bold tracking-wide'>Password   Generator</h1>
      <div className='flex justify-center'>
        <Generator />
      </div>
      <div>
      <div className="text-transparent cursor-default inline-block bg-gradient-to-r from-zinc-500 bg-clip-text to-zinc-200 text-white mt-20 leading-normal text-2xl font-bold tracking-wide text-left">
        Key Features :
      </div></div>
      <div className="text-transparent cursor-default inline-block bg-gradient-to-r from-zinc-500 bg-clip-text to-zinc-200 text-white mt-10 leading-normal text-2xl font-bold tracking-wide">
        Generate passwords containing numbers,<br /> special characters and even more.
      </div>
      <div>
      <div className="text-transparent cursor-default inline-block bg-gradient-to-r from-zinc-500 bg-clip-text to-zinc-200 text-white mt-10 leading-normal text-2xl font-bold tracking-wide">
        Copy Your Passwords to Clipboard.
      </div></div>

      <div className="footer cursor-default font-bold text-white absolute bottom-0 right-0 p-5">
        Parth Saini | <span className='cursor-pointer hover:text-zinc-600 duration-200 transition-all'><a href="https://github.com/parth299">Github</a></span> | <span className='cursor-pointer hover:text-blue-500 transition-all duration-200'><a href="https://www.instagram.com/parth.saini_/">Instagram</a></span>
      </div>
    </div>
    </>
  )
}

export default App
