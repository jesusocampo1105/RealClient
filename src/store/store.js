// Library
import { configureStore } from "@reduxjs/toolkit";

//Component
import cartSlice from "./shopping-cart/cartSlice";
import cartUISlice from "./shopping-cart/cartUISlice";

//Constant with state in Redux
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUISlice.reducer,
  },
});

export default store;
