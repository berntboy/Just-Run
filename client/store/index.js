import { configureStore } from "@reduxjs/toolkit";
import runnersReducer from "../reducers/runnersSlice";

const store = configureStore({
  reducer: {
    runners: runnersReducer,
  },
});

export default store;
