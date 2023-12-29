import { configureStore } from "@reduxjs/toolkit";
import { bikesReducer } from "./bikes/slice";

export const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
