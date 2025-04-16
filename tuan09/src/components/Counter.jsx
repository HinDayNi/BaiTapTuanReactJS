import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../components/features/counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">🧩 1. Counter App</h2>
      <div className="text-center">
        <div className="text-4xl font-bold mb-4">{count}</div>
        <div className="flex gap-2 justify-center mb-4">
          <button className="btn btn-primary" onClick={() => dispatch(increment())}>
            Tăng
          </button>
          <button className="btn btn-secondary" onClick={() => dispatch(decrement())}>
            Giảm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter