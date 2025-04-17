import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  step: 1,
}

export const advancedCounterSlice = createSlice({
  name: "advancedCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step
    },
    decrement: (state) => {
      state.value -= state.step
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
    setStep: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, reset, setStep } = advancedCounterSlice.actions

export default advancedCounterSlice.reducer
