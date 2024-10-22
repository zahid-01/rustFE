import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "LOGIN",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    clearLogin: (state) => {
      state.user = null;
    },
  },
});

export const { setLogin, clearLogin } = userSlice.actions;

export default userSlice;
