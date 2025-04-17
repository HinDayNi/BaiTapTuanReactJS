import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const incrementByAmount = () => {
    setCount(count + Number(incrementAmount));
  };

  const handleAmountChange = (e) => {
    setIncrementAmount(e.target.value);
  };

  return (
    <div className="!bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        🔄 7. Counter nâng cao có reset và tăng theo step
      </h2>
      
      <div className="text-6xl font-bold mb-8 !text-gray-800 flex justify-center items-center">{count}</div>
      
      <div className="flex gap-4 mb-6 justify-center items-center">
        <button 
          onClick={decrement}
          className="px-6 py-2 !bg-blue-600 !text-white rounded-md !hover:bg-red-600 transition-colors"
        >
          -
        </button>
        
        <button 
          onClick={increment}
          className="px-6 py-2 !bg-blue-600 !text-white rounded-md !hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      
      <div className='flex justify-center items-center mb-6'>
        <button 
          onClick={reset}
          className="px-6 py-2 mb-6 !bg-gray-500 !text-white rounded-md !hover:bg-gray-600 transition-colors w-full max-w-xs "
        >
            Reset
        </button>
      </div>
      
      <div className="flex flex-col w-full max-w-xs gap-2 justify-center items-center mx-auto">
        <div className="flex items-center gap-2">
          <input 
            type="number" 
            value={incrementAmount}
            onChange={handleAmountChange}
            className="p-2 border !border-gray-300 rounded-md w-full"
          />
          <button 
            onClick={incrementByAmount}
            className="px-4 py-2 !bg-blue-600 !text-white rounded-md hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}