import { useState } from "react";
import "./App.css";  // Tailwind will handle most of the styling
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [currentCurrency, setCurrentCurrency] = useState("inr");
  const [desiredCurrency, setDesiredCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyValue = useCurrencyInfo(currentCurrency);

  const handleCurrentCurrency = (event) => {
    setCurrentCurrency(event.target.value);
  };
  const handleDesiredCurrency = (event) => {
    setDesiredCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;

    // Allow only integers or decimals (e.g., 123 or 123.45)
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const convertCurrency = () => {
    const numericAmount = parseFloat(amount);
    const currencyRate = parseFloat(currencyValue["dzd"]);

    if (isNaN(numericAmount) || isNaN(currencyRate)) {
      setConvertedAmount("Invalid Amount or Currency");
      return;
    }

    const value = numericAmount * currencyRate;
    setConvertedAmount(value.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-blue-200 flex justify-center items-center">
      <div className="container mx-auto p-8 max-w-lg bg-white rounded-xl shadow-lg">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Currency Converter
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <label
              className="text-gray-800 text-lg font-medium mb-2 block"
              htmlFor="selectedCurrency"
            >
              Choose a Currency:
            </label>
            <select
              className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              name="selectedCurrency"
              id="selectedCurrency"
              value={currentCurrency}
              onChange={handleCurrentCurrency}
            >
              <option value="inr">INR</option>
              <option value="dzd">Algerian Dinar</option>
              <option value="aoa">Angolan Kwanza</option>
              <option value="xof">CFA Franc BCEAO</option>
            </select>
          </div>

          <div className="w-full sm:w-1/2">
            <label
              className="text-gray-800 text-lg font-medium mb-2 block"
              htmlFor="desiredCurrency"
            >
              To Currency:
            </label>
            <select
              className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              name="desiredCurrency"
              id="desiredCurrency"
              value={desiredCurrency}
              onChange={handleDesiredCurrency}
            >
              <option value="inr">INR</option>
              <option value="dzd">Algerian Dinar</option>
              <option value="aoa">Angolan Kwanza</option>
              <option value="xof">CFA Franc BCEAO</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="text-gray-800 text-lg font-medium mb-2 block"
            htmlFor="amount"
          >
            Enter Amount:
          </label>
          <input
            type="text"
            className="w-full p-3 bg-gray-200 text-gray-800 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="mb-6">
          <button
            onClick={convertCurrency}
            className="w-full p-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition duration-200"
          >
            Convert
          </button>
        </div>

        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 bg-gray-200 text-gray-800 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Converted amount"
            id="convertedAmount"
            value={convertedAmount || ""}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
