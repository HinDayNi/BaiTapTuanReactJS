// src/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    // Synchronous login (dùng trong Auth.jsx)
    login: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },

    // Async login actions (dùng trong LoginForm.jsx)
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },

    // Logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },

    // Update user info
    setUserInfo: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

// Xuất các actions và reducer
export const {
  login,
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  setUserInfo,
} = authSlice.actions;

export default authSlice.reducer;
