import { CartItemInterface } from '../pages/cartPage/components/interface';
import { Zero } from '../constants/constants';

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
