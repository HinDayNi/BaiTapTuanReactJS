import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import todoReducer from "./slices/todoSlice"
import themeReducer from "./slices/themeSlice"
import cartReducer from "./slices/cartSlice"
import authReducer from "./slices/authSlice"
import usersReducer from "./slices/usersSlice"
import advancedCounterReducer from "./slices/advancedCounterSlice"
import calculatorReducer from "./slices/calculatorSlice"
import eventsReducer from "./slices/eventsSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    advancedCounter: advancedCounterReducer,
    calculator: calculatorReducer,
    events: eventsReducer,
  },
})
