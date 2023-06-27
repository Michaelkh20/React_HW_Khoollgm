import { AppState } from '@/redux/store';
import { CartState } from '.';

export const selectCartModule = (state: AppState) => state.cart;

export const selectTicketAmountByFilmId = (state: AppState, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectTotalAmount = (state: AppState) => {
  const cart = selectCartModule(state);
  return Object.keys(cart).reduce((acc, key) => acc + cart[key], 0);
};

export const selectAllMovies = (state: AppState) => {
  const cart = selectCartModule(state);
  return Object.keys(cart);
};
