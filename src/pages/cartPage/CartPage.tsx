import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import useUserStore from '../../stores/userStore';
import { cartApi } from '../../api/cart-api';
import { getCartItemsCount, getTotalPrice } from '../../helpers/functions';
import { ROUTES } from '../../router/routes';
import CartItem from './components';
import EmptyCart from './components/EmptyCart';

const CartPage = () => {

  const currentUser = useUserStore(state => state.currentUser);
  const setUser = useUserStore(state => state.setUser);
  const clearItems = useUserStore(state => state.clearItems);
  const isDarkMode = useUserStore(state => state.isDarkMode);
  const cartItemsCount = currentUser && getCartItemsCount(currentUser.cart);
  const totalPrice = currentUser && getTotalPrice(currentUser.cart);
  const navigate = useNavigate();

  const onClickClearCart = async () => {
    if(window.confirm('Do you really want to clear your cart?')) {
      clearItems();
      if (currentUser) {
        const updatedUser = await cartApi.updateUserCart(currentUser._id, currentUser.name, currentUser.email ,currentUser.cart);

        setUser(updatedUser);
      }
    }
  };

  if(currentUser && !currentUser.cart.length) {
    return <EmptyCart />;
  }

  if (!currentUser) {
    return <Navigate to={ROUTES.HOME_PAGE} />;
  }

  return (
    <main className={`${isDarkMode ? 'bg-[#212121]' : 'bg-gray-100'} w-full min-h-90vh flex justify-center`}>
      <div className="w-4/6 mt-6 max-xl:w-5/6 flex flex-col">
        <div className="w-full flex h-8 justify-between">
          <div className="w-60 max-sm:w-52 h-8 flex justify-between items-center">
            <h2 className={`${isDarkMode ? 'text-[#8f59bf]' : 'text-black'} font-sans font-bold text-lg max-sm:text-xl`}>
              Your Basket
            </h2>
            <span className="font-sans font-semibold text-orange-500 text-lg max-sm:text-xl">{currentUser && currentUser.name}</span>
            <p className="text-orange-500">
              <ShoppingCartIcon />
            </p>
          </div>
          <Link className="w-8 h-8 text-gray-500 flex items-center justify-center hover:bg-gray-300 rounded hover:text-black"
                to={ROUTES.HOME_PAGE}
          >
            <CloseIcon />
          </Link>
        </div>
        <div className="w-full py-3 flex max-lg:flex-col max-lg:items-center justify-between">
          <div className="w-3/5 max-lg:w-full flex flex-col">
            {
              currentUser &&
              currentUser.cart.map((cartItem) => <CartItem key={cartItem.id} {...cartItem}/>)
            }
          </div>
          <div className="w-2/5 max-lg:w-full h-72 my-3 ml-6 max-lg:ml-0 py-4 px-6 border border-gray-200 rounded-lg bg-white">
            <div
              className="w-full flex items-center justify-center text-gray-400 cursor-pointer hover:text-gray-700"
              onClick={onClickClearCart}
            >
              <DeleteForeverOutlinedIcon />
              <p className="font-sans font-normal text-sm max-sm:text-xs">to empty your shopping cart</p>
            </div>
            <div className="my-6 border-b border-b-gray-300"/>
            <p className="font-sans text-xl font-normal max-sm:text-sm">
              Total count of goods: <b className="ml-3">{cartItemsCount}</b>
            </p>
            <div className="my-6 border-b border-b-gray-300"/>
            <p className="font-sans text-xl font-normal max-sm:text-sm">
              Total order amount: <b className="ml-3">${totalPrice}</b>
            </p>
            <button
              className="mt-8 w-full h-10 max-sm:h-8 bg-[#03c03c] text-white rounded-3xl"
              onClick={() => navigate(ROUTES.CHECKOUT)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
