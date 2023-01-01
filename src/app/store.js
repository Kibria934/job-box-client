import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/features/auth/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
