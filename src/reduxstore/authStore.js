import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "loggedInSlice",
    initialState : {loggedIn : false},
    reducers: {
        loggIn(state){
            state.loggedIn = true
        },
        logOut(state){
            state.loggedIn = false
        }
    }
  })

  export default authSlice