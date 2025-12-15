// src/App.jsx
import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  // safe hook usage
  const currencyInfo = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyInfo);

  // debug logs so you can see what's coming back
  console.log("currencyInfo", currencyInfo);
  console.log("options", options);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  

  const convert = () => {
    const rate = currencyInfo[to]
    if (!rate || !amount) return
    setConvertedAmount((Number(amount) * rate).toFixed(2))
  }
  
  

  return (
    <div
    className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')",
    }}
  >
  

      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-xl border border-gray-200 rounded-lg p-6 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-4">
            <InputBox
            className="ring-2 ring-blue-400"
  label="From"
  amount={amount}
  currencyOptions={options}
  currency={from}
  onCurrencyChange={(currency) => setFrom(currency)}
  onAmountChange={(value) => setAmount(value)}
/>
            </div>

            <div className="relative w-full h-2 mb-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black/90 text-white px-3 py-1"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
            <InputBox
  label="To"
  className="opacity-80"
  amount={convertedAmount}
  currencyOptions={options}
  currency={to}
  onCurrencyChange={(currency) => setTo(currency)}
  amountDisable

/>

            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
