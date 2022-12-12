import React from 'react';
import { useNavigate } from 'react-router-dom';

import useUserStore from '../../stores/userStore';
import { ROUTES } from '../../router/routes';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const isDarkMode = useUserStore(state => state.isDarkMode);

  return (
    <div className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : 'bg-gray-100'} w-full min-h-90vh max-sm:min-h-70vh flex justify-center items-center`}>
      <div className="w-1/2 h-96 flex flex-col justify-evenly items-center">
        <h1 className="font-sans font-bold max-sm:font-semibold text-2xl max-sm:text-xl max-sm:text-center">Thank you for your order</h1>
        <p className="mb-10 font-sans font-semibold text-base max-sm:text-sm max-xl:text-center">
          We are currently processing your order and will send you a confirmation email shortly
        </p>
        <button
          className={`${isDarkMode ? 'bg-[#8f59bf]' : 'bg-black'} w-44 h-10 text-white rounded hover:bg-white hover:text-black hover:border border-black`}
          onClick={() => navigate(ROUTES.HOME_PAGE)}
        >Back to home page
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
