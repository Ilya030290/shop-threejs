import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useUserStore from '../../stores/userStore';
import { ROUTES } from '../../router/routes';
import { authApi } from '../../api/auth-api';
import { getCartItemsCount, getTotalPrice } from '../../helpers/functions';
import DropDownMenu from '../DropDownMenu';
import ThemeSwitch from '../Switch';
import Image from '../../assets/mainLogo.png';

const Header = () => {

  const currentUser = useUserStore(state => state.currentUser);
  const setUser = useUserStore(state => state.setUser);
  const isDarkMode = useUserStore(state => state.isDarkMode);
  const cartItemsCount = currentUser && getCartItemsCount(currentUser.cart);
  const totalPrice = currentUser && getTotalPrice(currentUser.cart);

  const logOut = async () => {
    await authApi.logout();
    setUser(null);
  };

  return(
    <header className={`${isDarkMode ? 'bg-[#212121] text-gray-400 border border-[#8f59bf]' : 'border border-gray-200'} w-full min-h-10vh flex items-center justify-center rounded-t-3xl`}>
      <div className="max-lg:w-4/6 lg:w-full  xl:w-5/6 flex flex-row items-center max-lg:justify-between lg:justify-evenly">
        <Link className="flex items-center" to={ROUTES.HOME_PAGE}>
          <img className="w-10 h-10 mr-3 hover:cursor-pointer" src={Image} alt="cubeImage" />
          <p className="font-sans font-bold text-xl">Pix Mobile</p>
        </Link>
        <div className="max-lg:block hidden">
          <DropDownMenu currentUser={currentUser} />
        </div>
        <div className={`${isDarkMode ? 'border border-[#8f59bf]' : 'border border-gray-200'} max-lg:mx-4 h-9 max-lg:hidden`}></div>
        <Link className="font-sans font-bold text-sm max-lg:hidden" to={ROUTES.HOME_PAGE}>
          Catalog
        </Link>
        <div className="w-72 lg:w-64 flex max-lg:hidden flex-row items-center justify-between">
          <Link className="font-sans font-bold text-sm" to={ROUTES.CATEGORIES}>
            Categories
          </Link>
          <div className="relative max-lg:hidden">
            <input
              className="pl-8 pr-1 py-1 border border-gray-350 rounded lg:w-40 focus:outline-none focus:border-gray-500"
              type="search"
              name="search"
              placeholder="Search">
            </input>
            <SearchOutlined className="absolute left-1 top-1.5 text-gray-300" />
          </div>
        </div>
        {
          currentUser
            ? <div className="max-lg:hidden flex items-center">
                <Link className="w-32 h-8 mr-2 px-1 bg-[#fce25b] rounded-2xl flex justify-center items-center" to={ROUTES.CART_PAGE}>
                  <span>${totalPrice}</span>
                  <div className="mx-2 h-3/5 border-l border-l-black" />
                  <div>
                    <ShoppingCartIcon />
                    <span className="ml-1">{cartItemsCount}</span>
                  </div>
                </Link>
                <AccountCircleIcon className="cursor-pointer" />
                <span className="ml-2 text-gray-400 cursor-pointer">
                  {currentUser.name}
                </span>
                <button
                    className={`${isDarkMode ? 'text-gray-400' : 'text-white'} ml-4 w-20 h-8 bg-[#8f59bf] text-center rounded-2xl max-lg:hidden`}
                    onClick={logOut}
                >
                  Log Out
                </button>
            </div>
            : <Link className="ml-3 w-32 h-8 bg-blue-500 rounded-2xl text-white text-sm text-center leading-8 max-lg:hidden" to={ROUTES.LOGIN}>
              Login / Signup
            </Link>
        }
        <div className="max-lg:hidden block">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
