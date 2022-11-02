import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "loggedInSlice",
  initialState: { loggedIn: 0, userLogin: { userEmail: "",userToken: "" } },
  reducers: {
    loggIn : (state,action) => {
      state.loggedIn = 1;
      state.userLogin.userEmail = action.payload.userEmail
      state.userLogin.userToken = action.payload.userToken
      sessionStorage.setItem("loggedIn",1)
      sessionStorage.setItem("userEmail",action.payload.userEmail)
      sessionStorage.setItem("userToken",action.payload.userToken)
    },
    logOut : (state,action) => {
      state.loggedIn = 0;
      state.userLogin.userEmail = ""
      state.userLogin.userToken = ""
      sessionStorage.setItem("loggedIn",0)
      sessionStorage.removeItem("userEmail")
      sessionStorage.removeItem("userToken")
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
