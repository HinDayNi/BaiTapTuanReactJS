import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    height: 0,
    weight: 0,
    result: null,
    bmiCategory: '',
  },
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    calculateBMI: (state) => {
      const heightInMeters = state.height / 100;
      const bmi = state.weight / (heightInMeters * heightInMeters);
      state.result = bmi.toFixed(2);
      
      if (bmi < 18.5) {
        state.bmiCategory = 'Thiếu cân';
      } else if (bmi < 25) {
        state.bmiCategory = 'Bình thường';
      } else if (bmi < 30) {
        state.bmiCategory = 'Thừa cân';
      } else {
        state.bmiCategory = 'Béo phì';
      }
    },
  },
});

export const { updateInput, calculateBMI } = calculatorSlice.actions;
export default calculatorSlice.reducer;