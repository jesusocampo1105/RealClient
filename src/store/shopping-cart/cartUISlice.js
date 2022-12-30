//Library
import { createSlice } from "@reduxjs/toolkit";


//Constant with state in Redux
const cartUISlice = createSlice({
  name: "cartUI",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUIActions = cartUISlice.actions;
export default cartUISlice;
