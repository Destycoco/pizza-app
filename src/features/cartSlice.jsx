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
  reducers: {},
});
// export const {} = cartSlice.actions;
export default cartSlice.reducer;
