import { createAsyncThunk } from "@reduxjs/toolkit";

export const isAuth = createAsyncThunk("auth/isauth", () => {
  return JSON.parse(localStorage.getItem("authorized"));
});

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ user, pass }, { rejectWithValue }) => {
    if (user !== "example@example.com" || pass !== "password") {
      return rejectWithValue("Incorrect user or password");
    } else {
      localStorage.setItem("authorized", "true");
      return true;
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", () => {
  localStorage.setItem("authorized", "false");
  return false;
});
