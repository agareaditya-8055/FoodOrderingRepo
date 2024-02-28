import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slices/cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartreducer,
  },
});

export default appStore;
