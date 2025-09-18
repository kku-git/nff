// src/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    LoggedIn: false,
    info: null,
  },
  reducers: {
    login: (state, action) => {
      state.LoggedIn = true;
      state.info = action.payload;
    },
    logout: (state) => {
      state.LoggedIn = false;
      state.info = null;
    },
  },
});
export const { login, logout } = user.actions;

export default user.reducer;
