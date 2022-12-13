import create, { StoreApi, UseBoundStore } from 'zustand';

import { UserStore } from '../types/types';
import { Diff, Sum } from '../constants/constants';
import { getCurrentUserFromLS } from '../helpers/functions';

const useUserStore: UseBoundStore<StoreApi<UserStore>> = create((set, get) => ({
  isDarkMode: false,
  toggleMode: (checked) => {

    if (checked) {
      set({ isDarkMode: true });
    }
    if (!checked) {
      set({ isDarkMode: false });
    }
  },
  error: null,
  setError: (error) => {
    set({ error: error });
  },
  currentUser: getCurrentUserFromLS(),
  setUser: (currentUser) => {
    set({ currentUser });
  },
  addNewCartItem: (newItem) => {
    const currentUser = get().currentUser;

    if (currentUser) {
      const foundItem = currentUser.cart.find(item => item.id === newItem.id);

        if (foundItem) {
          foundItem.count++;
        } else {
          currentUser.cart = [...currentUser.cart, newItem];
        }
    }
  },
  changeCountOfItems: (action: string, id: string) => {
    const currentUser = get().currentUser;

    if (currentUser) {
      const foundItem = currentUser.cart.find((item) => item.id === id);

      if (foundItem && action === Sum) {
        foundItem.count++;
      }
      if (foundItem && action === Diff) {
        foundItem.count--;
      }
    }
  },
  removeCartItem: (id: string) => {
    const currentUser = get().currentUser;

    if (currentUser) {
      currentUser.cart = currentUser.cart.filter((item) => item.id !== id);
    }
  },
  clearItems: () => {
    const currentUser = get().currentUser;

    if (currentUser) {
      currentUser.cart = [];
    }
  },
}));

export default useUserStore;
