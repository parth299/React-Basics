import { useState } from 'react'
import './App.css'
import Convertor from './components/Convertor'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import useGithubInfo from './hooks/useGithubInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [username, setUsername] = useState("");

  const data = useCurrencyInfo(from);

  const options = Object.keys(data);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const githubInfo = useGithubInfo(username);
  const gitImg = githubInfo.avatar_url;

  const convert = () => {
    setConvertedAmount((amount * data[to]).toFixed(2));
  }

  return (
    <>
      <h1 className=' text-zinc-700 text-center font-bold text-8xl p-5'>Currency Converter.</h1>
      <Convertor
        label="From"
        amount={amount}
        selectCurrency={from}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        onAmountChange={(amount) => setAmount(amount)}
      />
      <div className="button flex justify-center">
        <button onClick={swap} className='bg-blue-500 p-2 rounded-lg text-white'>SWAP</button>
      </div>
      <Convertor
        label="To"
        selectCurrency={to}
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
      />
      <div className="button flex justify-center">
        <button onClick={convert} className='bg-blue-500 p-2 rounded-lg text-white'>Convert {from} to {to}</button>
      </div>

      {/* Github details */}
      <div className="github flex justify-between mt-24">
        <div className='px-5'>
          <label className='text-white px-2 font-bold' htmlFor="git">Enter Github Username:</label>
        <input 
          id='git'
          type="text" 
          className='rounded-lg'
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        
        {
          gitImg && <img width={100} height={100} src={gitImg} alt="" />
        }
      </div>
    </>
  )
}

export default App
