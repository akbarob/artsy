import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
// import counterReducer from '../features/counter/counterSlice'
// import counterReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
