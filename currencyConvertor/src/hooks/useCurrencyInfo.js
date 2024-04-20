import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [currencyConversionData, setCurrencyConversionData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => {
            // console.log(res.json());
            return res = res.json();
        })
        .then((res) => {
            console.log(res[currency]);
            return setCurrencyConversionData(res[currency]);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [currency])
    
    return currencyConversionData;
}


export default useCurrencyInfo;