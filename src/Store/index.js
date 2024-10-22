import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./login";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
