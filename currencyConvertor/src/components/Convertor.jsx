import React from 'react';

function Convertor({
    label,
    amount,
    onAmountChange,
    selectCurrency = "usd",
    onCurrencyChange,
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false
}) {
  return (
    <>
        <div className="outerInputForm p-4 box-border  flex justify-center">
          <div className='inputBox bg-white/50 p-4 w-2/4 rounded-lg flex'>
            <div className='w-3/4'>
              <label className='px-2 py-2 block'>{label}</label>
              <input
                className='text-black p-1 bg-white/50 rounded-lg w-1/2 px-2 text-center'
                type="number" 
                value={amount}
                disabled={amountDisable}
                onChange={(e) => {
                  const newValue = e.target.value;
                  onAmountChange && onAmountChange(newValue === "" ? "" : Number(newValue));
                }}
              />
            </div>
            
            <div className=''>
              <p className='py-2'>Currency Types</p>
              <select 
                className='relative left-4 p-2 rounded-lg w-11/12' 
                value={selectCurrency} 
                name="currencyOptions" 
                disabled={currencyDisable} 
                id="" 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              >
                {currencyOptions.map((currency) => (
                  <option className='p-2' key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
    </>
  )
}

export default Convertor;
