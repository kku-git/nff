import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "김씨",
});

export default configureStore({
  reducer: {},
});
