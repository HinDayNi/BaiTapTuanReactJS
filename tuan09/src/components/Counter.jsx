import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">🧩 1. Counter App</h2>
      <div className="text-center">
        <div className="text-4xl font-bold mb-4">{count}</div>
        <div className="flex gap-2 justify-center mb-4">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(increment())}
          >
            Tăng
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(decrement())}
          >
            Giảm
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            className="input max-w-24"
          />
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementByAmount(incrementAmount))}
          >
            Tăng theo giá trị
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;