import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    user: userSlice, // Use "user" as the key in the reducer object
  },
});

export default store;

