import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import useUserStore from '../../stores/userStore';
import { getCartItemsCount, getTotalPrice } from '../../helpers/functions';
import { stripePublishableKey, Zero } from '../../constants/constants';
import CheckoutForm from './components/CheckoutForm';

const Checkout = () => {

  const currentUser = useUserStore(state => state.currentUser);
  const isDarkMode = useUserStore(state => state.isDarkMode);
  const cartItemsCount = currentUser && getCartItemsCount(currentUser.cart);
  const totalPrice = currentUser && getTotalPrice(currentUser.cart);

  const stripePromise = loadStripe(stripePublishableKey);

  return (
    <div className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : 'bg-gray-100'} w-full min-h-90vh max-sm:min-h-80vh flex justify-center items-center`}>
      <Elements stripe={stripePromise}>
        <div className="w-1/2 h-3/4 flex flex-col items-center">
          <h2 className="font-sans font-bold max-sm:font-semibold text-2xl max-sm:text-xl">Checkout Summary</h2>
          <h3 className="mt-6 font-sans font-bold max-sm:font-semibold text-xl max-sm:text-base">
            Total Items: {cartItemsCount ? cartItemsCount : Zero}
          </h3>
          <h4 className="mt-4 font-sans font-bold max-sm:font-semibold text-base max-sm:text-sm">
            Amount to Pay: ${totalPrice ? totalPrice : Zero}
          </h4>
          <CheckoutForm />
        </div>
      </Elements>
    </div>
  );
};

export default Checkout;
