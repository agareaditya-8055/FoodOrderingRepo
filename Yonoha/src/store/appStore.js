import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default appStore;
