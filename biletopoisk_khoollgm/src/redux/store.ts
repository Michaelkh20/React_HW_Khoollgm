import { configureStore } from '@reduxjs/toolkit';
import { CartState, cartReducer } from './features/cart';

export type AppState = {
  cart: CartState;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
