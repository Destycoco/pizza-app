import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      pizzaId: 0,
      name: 'ade',
      quantity: 1,
      unitPrice: 23,
      totalPrice: 23,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
