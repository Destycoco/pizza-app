import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    // {
    //   pizzaId: 0,
    //   name: 'ade',
    //   quantity: 1,
    //   unitPrice: 23,
    //   totalPrice: 23,
    // },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem: (state, action) => {
      const currentPizza = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      currentPizza.quantity++;
    },
    decreaseItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.pizzaId === action.payload,
      );
      const currentPizza = state.cart[index];
      currentPizza.quantity--;
      if (currentPizza.quantity < 1) {
        state.cart.splice(index, 1);
      }
      // currentPizza.quantity--;
    },
  },
});
export const { addToCart, deleteItem, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
