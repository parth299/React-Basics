import React from 'react'

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
          <div className='inputBox bg-white/50 p-4 w-1/2 rounded-lg'>
            <label className='px-2 py-2 block'>{label}</label>
            <input
                className='text-black p-1 bg-white/50 rounded-lg w-1/2 px-2 text-center'
                type="number" 
                value={amount}
                disabled={amountDisable}
                onChange={(e) => (onAmountChange && onAmountChange(Number(e.target.value)))}
            />
            <select value={selectCurrency} name="currencyOptions" disabled={currencyDisable} id="" onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}>
              {
                currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))
              }
            </select>
          </div>
            
        </div>
    </>
  )
}

export default Convertor