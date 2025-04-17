import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  height: 170, // cm
  weight: 70, // kg
  bmi: 24.22,
  bmiCategory: "Bình thường",
}

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
    },
    calculateResult: (state) => {
      // Calculate BMI: weight (kg) / (height (m))^2
      const heightInMeters = state.height / 100
      state.bmi = (state.weight / (heightInMeters * heightInMeters)).toFixed(2)

      // Determine BMI category
      if (state.bmi < 18.5) {
        state.bmiCategory = "Thiếu cân"
      } else if (state.bmi >= 18.5 && state.bmi < 25) {
        state.bmiCategory = "Bình thường"
      } else if (state.bmi >= 25 && state.bmi < 30) {
        state.bmiCategory = "Thừa cân"
      } else {
        state.bmiCategory = "Béo phì"
      }
    },
  },
})

export const { updateInput, calculateResult } = calculatorSlice.actions

export default calculatorSlice.reducer
