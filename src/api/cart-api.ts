import { CartItemInterface } from '../pages/cartPage/components/interface';
import { CheckoutSessionPayload, CheckoutSessionResponse, User } from '../types/types';
import { axiosInstance } from '../config/axiosInstance';

export const cartApi = {
  updateUserCart: (userId: string, name: string, email: string ,cart: CartItemInterface[]) => {
    return axiosInstance.put<unknown, User>(`/users/${userId}`, { name, email, cart });
  },
  stripeCreateCheckoutSession: (data: CheckoutSessionPayload) => {
    return axiosInstance.post<unknown, CheckoutSessionResponse>(`/create-checkout-session`, data);
  },
};
