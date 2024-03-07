import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer,
    alert: alertReducer,
  },
});

export default appStore;
