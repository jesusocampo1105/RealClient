// Import dependencies
import { createSlice } from "@reduxjs/toolkit";

// State for createSlice
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Reducer for createSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        // Redux toolkit clone the array behind the scene
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
