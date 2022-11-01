import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "loggedInSlice",
  initialState: { loggedIn: 0, userLogin: { userEmail: "" } },
  reducers: {
    loggIn : (state,action) => {
      state.loggedIn = 1;
      state.userLogin.userEmail = action.payload.userEmail
      sessionStorage.setItem("loggedIn",1)
      sessionStorage.setItem("userEmail",action.payload.userEmail)
    },
    logOut : (state,action) => {
      state.loggedIn = 0;
      state.userLogin.userEmail = ""
      sessionStorage.setItem("loggedIn",0)
      sessionStorage.removeItem("userEmail")
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
