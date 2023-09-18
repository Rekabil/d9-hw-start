import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
