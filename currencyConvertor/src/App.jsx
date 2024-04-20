import { useState } from 'react'
import './App.css'
import Convertor from './components/Convertor'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const data = useCurrencyInfo(from);

  const options = Object.keys(data);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

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
    </>
  )
}

export default App
