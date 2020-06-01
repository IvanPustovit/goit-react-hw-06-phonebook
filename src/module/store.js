import { configureStore } from "@reduxjs/toolkit";
import rootModule from "./rootModule";

const store = configureStore({
  reducer: rootModule,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
