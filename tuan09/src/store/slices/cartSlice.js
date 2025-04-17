import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }

      state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item) {
        item.quantity = Math.max(1, quantity)
      }

      state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export default cartSlice.reducer
