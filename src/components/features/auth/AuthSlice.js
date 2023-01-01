import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  role: "",
  isLoading: false,
  isError: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
});
