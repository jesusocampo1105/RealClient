// Import dependencies
import { configureStore } from "@reduxjs/toolkit";

// Import components
import cartSlice from "./CartSlice";
import cartUISlice from "./cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUISlice.reducer,
  },
});

export default store;
