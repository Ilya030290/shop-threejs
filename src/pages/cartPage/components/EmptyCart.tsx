import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../router/routes';
import emptyCartImg from '../../../assets/empty-cart.png';

const EmptyCart = () => (
  <div className="w-full min-h-screen flex justify-center items-center">
    <div className="w-1/2 h-128 mt-8 flex flex-col items-center">
      <h2 className="font-sans font-bold text-2xl max-md:text-xl max-md:text-center max-md:mb-4">
        The cart is empty <span>😕</span>
      </h2>
      <p className="mt-6 font-sans text-sm text-gray-500 text-center mb-10">
        You probably didn’t order any more goods.
        <br />
        To order goods, go to the home page.
      </p>
      <img className="w-96 max-md:w-48 h-96 max-md:h-48 max-md:mb-14" src={emptyCartImg} alt="Empty cart" />
      <Link className="mt-8 w-44 h-8 bg-black rounded-3xl text-center text-white leading-7" to={ROUTES.HOME_PAGE} >
        Back to homepage
      </Link>
    </div>
  </div>
);

export default EmptyCart;
