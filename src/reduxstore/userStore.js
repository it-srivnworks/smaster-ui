import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "addUser",
    initialState: { },
    reducers: {
      increment(state) {
        console.log('');
      },
    },
  });


export const addUserActions = userSlice.actions;
export default userSlice