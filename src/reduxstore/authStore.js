import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "loggedInSlice",
  initialState: { loggedIn: false, userLogin: { userEmail: "" } },
  reducers: {
    loggIn : (state,action) => {
      state.loggedIn = true;
      state.userLogin.userEmail = action.payload.userEmail
      sessionStorage.setItem("loggedIn",true)
      sessionStorage.setItem("userEmail",action.payload.userEmail)
    },
    logOut : (state,action) => {
      state.loggedIn = false;
      state.userLogin.userEmail = ""
      sessionStorage.setItem("loggedIn",false)
      sessionStorage.setItem("userEmail","")
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
