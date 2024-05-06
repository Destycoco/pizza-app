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
  priority: false,
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
      currentPizza.totalPrice = currentPizza.unitPrice * currentPizza.quantity;
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
      currentPizza.totalPrice = currentPizza.unitPrice * currentPizza.quantity;
      // currentPizza.quantity--;
    },
    clearCart: (state) => {
      state.cart.splice(0, `${state.cart.length}`);
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
export const {
  addToCart,
  deleteItem,
  increaseItem,
  decreaseItem,
  setPriority,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
