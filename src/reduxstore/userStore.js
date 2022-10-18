import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "addUser",
    initialState: { addUserCounter: 0 },
    reducers: {
      increment(state) {
        console.log(state.addUserCounter);
        state.addUserCounter++;
      },
    },
  });


export const addUserActions = userSlice.actions;
export default userSlice