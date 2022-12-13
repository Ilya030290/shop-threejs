import { CartItemInterface } from '../pages/cartPage/components/interface';
import { CurrentUser, Zero } from '../constants/constants';
import { User } from '../types/types';

export const getCartItemsCount = (cart: CartItemInterface[]): number => {
  return cart.reduce((sum, item) => sum + item.count, Zero);
};

export const getTotalPrice = (cart: CartItemInterface[]): number => {
  if (cart.length) {
    return Math.floor(cart.reduce((sum, item) => (item.price * item.count) + sum, Zero));
  } else {
    return Zero;
  }
};

export const getTotalItemPrice = (price: number, count: number) => Math.floor(price * count);

export const getCurrentUserFromLS = (): User | null => {
  const data = localStorage.getItem(CurrentUser);

  return data ? JSON.parse(data) : null;
};
