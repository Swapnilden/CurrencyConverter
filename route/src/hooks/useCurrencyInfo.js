import { useEffect, useState } from "react";
import currencies from "./currencies";

const useCurrencyInfo = (baseCurrency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const currenciesInfo = {};
    for (const currency in currencies) {
      if (currency === "usd" || baseCurrency === "usd") {
        currenciesInfo[currency] = currencies[currency];
      } else {
        currenciesInfo[currency] = currencies[currency] / currencies["usd"];
      }
    }
    setCurrencyInfo(currenciesInfo);
  }, [baseCurrency]);

  return currencyInfo;
};

export default useCurrencyInfo;