"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, reset, setStep } from "../store/slices/advancedCounterSlice"

function AdvancedCounter() {
  const { value, step } = useSelector((state) => state.advancedCounter)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(5)
  const [newStep, setNewStep] = useState(step)

  const handleSetStep = () => {
    const stepValue = Number.parseInt(newStep)
    if (!isNaN(stepValue) && stepValue > 0) {
      dispatch(setStep(stepValue))
    }
  }

  const handleIncrementByAmount = () => {
    const amountValue = Number.parseInt(amount)
    if (!isNaN(amountValue)) {
      dispatch(incrementByAmount(amountValue))
    }
  }

  return (
    <div className="feature-container">
      <h2>🔄 Counter nâng cao có reset và tăng theo step</h2>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{value}</h3>

        <div style={{ marginBottom: "1.5rem" }}>
          <button onClick={() => dispatch(increment())}>Tăng ({step})</button>
          <button onClick={() => dispatch(decrement())}>Giảm ({step})</button>
          <button onClick={() => dispatch(reset())} style={{ backgroundColor: "#f59e0b" }}>
            Reset
          </button>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <div className="form-group" style={{ maxWidth: "300px", margin: "0 auto" }}>
            <label htmlFor="step">Bước nhảy</label>
            <div style={{ display: "flex" }}>
              <input id="step" type="number" min="1" value={newStep} onChange={(e) => setNewStep(e.target.value)} />
              <button onClick={handleSetStep} style={{ marginLeft: "0.5rem" }}>
                Đặt bước nhảy
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="form-group" style={{ maxWidth: "300px", margin: "0 auto" }}>
            <label htmlFor="amount">Tăng theo số lượng</label>
            <div style={{ display: "flex" }}>
              <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <button onClick={handleIncrementByAmount} style={{ marginLeft: "0.5rem" }}>
                Tăng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedCounter
