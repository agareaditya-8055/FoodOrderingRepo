import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default appStore;
