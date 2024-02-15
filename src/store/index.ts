import { combineReducers, configureStore } from "@reduxjs/toolkit";

import loginSlice from "./loginSlice";

const rootReducer = combineReducers({
  item: loginSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
