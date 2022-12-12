import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import useUserStore from '../../../stores/userStore';
import { cartApi } from '../../../api/cart-api';
import { getTotalItemPrice } from '../../../helpers/functions';
import { CartItemInterface } from './interface';
import { Sum, Diff, One } from '../../../constants/constants';

const CartItem = ({ id, title, image, category, price, count }: CartItemInterface) => {

  const currentUser = useUserStore(state => state.currentUser);
  const setUser = useUserStore(state => state.setUser);
  const removeCartItem = useUserStore(state => state.removeCartItem);
  const changeCountOfItems = useUserStore(state => state.changeCountOfItems);
  const totalItemPrice = getTotalItemPrice(price, count);

  const navigate = useNavigate();

  const onClickRemoveCartItem = async () => {
    if (window.confirm('Do you really want to remove the product?')) {
      removeCartItem(id);
      if (currentUser) {
        const updatedUser = await cartApi.updateUserCart(currentUser._id, currentUser.name, currentUser.email ,currentUser.cart);

        setUser(updatedUser);
      }
    }
  };

  const onClickDiffOfCount = async () => {
    changeCountOfItems(Diff, id);
    if (currentUser) {
      const updatedUser = await cartApi.updateUserCart(currentUser._id, currentUser.name, currentUser.email ,currentUser.cart);

      setUser(updatedUser);
    }
  };

  const onClickSumOfCount = async () => {
    changeCountOfItems(Sum, id);
    if (currentUser) {
      const updatedUser = await cartApi.updateUserCart(currentUser._id, currentUser.name, currentUser.email ,currentUser.cart);

      setUser(updatedUser);
    }
  };

  return (
    <div className="w-full min-h-36 relative my-3 p-4 flex max-sm:flex-col max-sm:items-center border border-gray-200 rounded-lg bg-white">
      <img
        className="w-32 h-full max-md:h-24 object-contain rounded-lg cursor-pointer"
        src={image}
        alt="cartItem"
        onClick={() => navigate(`/categories/${category}/${id}`)}
      />
      <button
        className="absolute top-0 right-3 w-4 h-4"
        onClick={onClickRemoveCartItem}
      >
        <CloseIcon />
      </button>
      <div className="w-full h-full ml-4 mr-3 max-sm:ml-0 max-sm:mr-0">
        <h2 className="font-sans font-bold text-base max-sm:text-sm max-sm:mt-2 max-sm:text-center">{title}</h2>
        <p className="mt-2 font-sans text-sm max-sm:text-xs text-gray-400 max-sm:text-center">
          Category: {category}
        </p>
        <div className="mt-2 border-b border-b-gray-300" />
        <div className="mt-3 flex items-center max-sm:flex-col justify-between">
            <span className="font-sans text-sm text-gray-400 max-sm:text-xs">Quantity:</span>
            <div className="w-28 max-sm:w-20 max-sm:my-4 flex items-center justify-between">
              <button
                className="text-orange-500 hover:text-orange-700 disabled:opacity-10"
                onClick={onClickDiffOfCount}
                disabled={count <= One}
              >
                <RemoveCircleOutlineIcon />
              </button>
              <span className="mx-2 font-sans font-bold text-lg max-sm:text-sm">{count}</span>
              <button
                className="text-orange-500 hover:text-orange-700"
                onClick={onClickSumOfCount}
              >
                <AddCircleOutlineIcon />
              </button>
            </div>
          <span className="font-sans text-sm text-gray-400 max-sm:text-xs">Price:
            <b className="text-black max-sm:text-xs"> ${totalItemPrice}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
