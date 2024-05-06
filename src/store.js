import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer.js";
import filterReducer from "./reducers/filterReducer.js";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    filter: filterReducer,
  },
});

export default store;
