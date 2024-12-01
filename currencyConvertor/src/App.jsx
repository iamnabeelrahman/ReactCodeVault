import { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [currentCurrency, setCurrentCurrency] = useState("inr");
  const [desiredCurrency, setDesiredCurrency] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyValue = useCurrencyInfo(currentCurrency);
  const Allcurrency = Object.keys(currencyValue);

  const swap = () => {
    const tempCurrency = currentCurrency;
    setCurrentCurrency(desiredCurrency);
    setDesiredCurrency(tempCurrency);
  };

  const handleCurrentCurrency = (event) => {
    setCurrentCurrency(event.target.value);
  };
  const handleDesiredCurrency = (event) => {
    setDesiredCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const convertCurrency = () => {
    const numericAmount = parseFloat(amount);
    const currencyRate = parseFloat(currencyValue[desiredCurrency]);

    if (isNaN(numericAmount) || isNaN(currencyRate)) {
      setConvertedAmount("Invalid Amount or Currency");
      return;
    }

    const value = numericAmount * currencyRate;
    setConvertedAmount(value.toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-100 to-blue-200">
      <div className="container mx-auto p-8 max-w-lg bg-white rounded-xl shadow-lg mt-10 flex-grow">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Currency Converter
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4 items-center">
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
              {Allcurrency.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={swap}
            className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-200 sm:self-center mt-4"
            aria-label="Swap currencies"
          >
            🔄
          </button>

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
              {Allcurrency.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
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
            {`Convert to ${desiredCurrency}`}
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

      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 py-4 text-center text-white">
        <p className="text-lg font-medium">Project by Nabeel Rahman</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/iamnabeelrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/iamnabeelrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-600 transition duration-300"
          >
            <FaTwitter className="text-2xl" />
            <span>X</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
