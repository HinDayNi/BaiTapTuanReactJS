"use client"

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../store/slices/counterSlice"

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="feature-container">
      <h2>🧩 Counter App</h2>
      <div className="counter-container" style={{ marginTop: "2rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{count}</h3>
        <div>
          <button onClick={() => dispatch(increment())}>Tăng</button>
          <button onClick={() => dispatch(decrement())}>Giảm</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
