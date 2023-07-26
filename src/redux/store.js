import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";

const store = configureStore({
  reducer: {
     //name: sliceName
    users: userSlice,
  },
});

export default store;
