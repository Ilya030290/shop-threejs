import React, { FormEvent } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

import useUserStore from '../../../../stores/userStore';
import { cartApi } from '../../../../api/cart-api';
import { Hundred, Zero } from '../../../../constants/constants';

const CheckoutForm = () => {

  const currentUser = useUserStore(state => state.currentUser);
  const cartItems = currentUser && currentUser.cart;

  const stripe = useStripe();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cartItems && cartItems.length !== Zero) {

      const line_items = cartItems && cartItems.map((item) => {
        return {
          quantity: item.count,
          price_data: {
            currency: 'usd',
            unit_amount: item.price * Hundred,
            product_data: {
              name: item.title,
              description: item.description,
              images: [item.image],
            },
          },
        };
      });

      const customer_email = currentUser && currentUser.email;

      const res = await cartApi.stripeCreateCheckoutSession({ line_items, customer_email });

      stripe && await stripe.redirectToCheckout({ sessionId: res.sessionId });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        className="mt-12 w-24 h-10 bg-[#6772e5] text-white rounded hover:-translate-y-0.5 hover:bg-[#7795f8]"
        type="submit"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
