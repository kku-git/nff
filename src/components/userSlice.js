// src/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    info: null, // 유저 정보 (임시로 흉내)
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.info = action.payload; // { name: "몽글이" } 같은 정보 저장 가능
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.info = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
