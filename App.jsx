import { useState } from 'react'
import {InputBox} from './components'
import currencies from './hooks/currencies'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const updateFromCurrency = (currency) => {
    setFrom(currency)
  }

  const updateToCurrency = (currency) => {
    setTo(currency)
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full max-w-md mx-auto p-5">
            <form
                className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="flex mb-4">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={Object.keys(currencies)}
                        onCurrencyChange={updateFromCurrency}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                        currencyInfo={currencyInfo}
                        className="flex-grow mr-2"
                    />
                    <button
                        type="button"
                        className="flex-none border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={Object.keys(currencies)}
                        onCurrencyChange={updateToCurrency}
                        selectCurrency={to}
                        amountDisable
                        className="flex-grow"
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
);
}

export default App