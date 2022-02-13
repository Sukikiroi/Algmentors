import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  error: "",
  loading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
      state.loading = false;
    },
    logout: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = {};
      state.error = "";
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, loginSuccess, loginError, logout, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
