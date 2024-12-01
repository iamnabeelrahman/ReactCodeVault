import React, { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setCurrencyInfo(res[currency] || {}));  // Make sure we get all rates
  }, [currency]);

  return currencyInfo;  // This will contain all the exchange rates for the selected currency
}
