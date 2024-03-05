import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.items.push(...action.payload);
      } else {
        state.items.push(action.payload);
      }
    },

    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item?.$id !== action?.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
