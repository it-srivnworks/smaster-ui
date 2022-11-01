import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "./userStore";
import authSlice from "./authStore";

const store = configureStore({
  reducer: { addUserR: userSlice.reducer, auth: authSlice.reducer },
});

export default store;
