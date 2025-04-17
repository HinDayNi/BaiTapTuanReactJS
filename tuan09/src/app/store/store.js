import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../../components/features/counterSlice"
import todoReducer from '../../components/features/todoSlice';
import themeReducer from '../../components/features/themeSlice';
import cartReducer from '../../components/features/cartSlice';
import authReducer from '../../components/features/authSlice';
import usersReducer from '../../components/features/usersSlice';
import calculatorReducer from '../../components/features/calculatorSlice';
import eventsReducer from '../../components/features/eventsSlice';
import productReducer from '../../components/features/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    calculator: calculatorReducer,
    events: eventsReducer,
    products: productReducer,
  },
});