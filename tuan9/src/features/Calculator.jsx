"use client"

import { useSelector, useDispatch } from "react-redux"
import { updateInput, calculateResult } from "../store/slices/calculatorSlice"

function Calculator() {
  const { height, weight, bmi, bmiCategory } = useSelector((state) => state.calculator)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch(updateInput({ name, value: Number.parseFloat(value) || 0 }))
  }

  const handleCalculate = () => {
    dispatch(calculateResult())
  }

  return (
    <div className="feature-container">
      <h2>🧮 Form tính toán đơn giản (BMI)</h2>

      <div style={{ marginTop: "2rem", maxWidth: "500px" }}>
        <div className="form-group">
          <label htmlFor="height">Chiều cao (cm)</label>
          <input id="height" type="number" name="height" value={height} onChange={handleInputChange} min="1" />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Cân nặng (kg)</label>
          <input id="weight" type="number" name="weight" value={weight} onChange={handleInputChange} min="1" />
        </div>

        <button onClick={handleCalculate}>Tính BMI</button>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            backgroundColor: "#f0fdf4",
            borderRadius: "0.5rem",
          }}
        >
          <h3>Kết quả</h3>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>BMI:</strong> {bmi}
          </p>
          <p>
            <strong>Phân loại:</strong> {bmiCategory}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Calculator
