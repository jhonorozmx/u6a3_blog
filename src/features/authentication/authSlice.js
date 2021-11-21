import { createSlice } from "@reduxjs/toolkit";
import { isAuth, logIn, logOut } from "./authThunks";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  },

  reducers: {
    clearAuthError: (state) => {
      state.error = {
        hasError: false,
        errorMessage: "",
      };
    },
  },

  extraReducers: {
    [isAuth.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [isAuth.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    },

    [isAuth.rejected]: (state) => {
      state.error.hasError = true;
      state.isLoading = false;
    },

    [logIn.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [logIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    },

    [logIn.rejected]: (state, action) => {
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
      state.isLoading = false;
    },

    [logOut.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },

    [logOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    },

    [logOut.rejected]: (state, action) => {
      state.error.hasError = true;
      state.isLoading = false;
    },
  },
});

export const { clearAuthError } = authSlice.actions;

export default authSlice.reducer;
