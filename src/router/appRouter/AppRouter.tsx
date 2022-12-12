import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../routes';
import Layout from '../../components/Layout';
import HomePage from '../../pages/homePage/HomePage';
import CategoriesPage from '../../pages/categoriesPage/CategoriesPage';
import CategoryPage from '../../pages/categoryPage/CategoryPage';
import ShopItemPage from '../../pages/shopItemPage/ShopItemPage';
import Login from '../../pages/login/Login';
import SignUp from '../../pages/signup/SignUp';
import CartPage from '../../pages/cartPage/CartPage';
import Checkout from '../../pages/checkout/Checkout';
import CheckoutSuccess from '../../pages/checkoutSuccess/CheckoutSuccess';
import CheckoutCanceled from '../../pages/checkoutCanceled/CheckoutCanceled';
import NotFound from '../../pages/notFound/NotFound';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME_PAGE} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
      <Route path={ROUTES.CATEGORY_PAGE} element={<CategoryPage />} />
      <Route path={ROUTES.SHOP_ITEM_PAGE} element={<ShopItemPage />} />
      <Route path={ROUTES.CART_PAGE} element={<CartPage />} />
      <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
      <Route path={ROUTES.CHECKOUT_SUCCESS} element={<CheckoutSuccess />} />
      <Route path={ROUTES.CHECKOUT_CANCELED} element={<CheckoutCanceled />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
    </Route>
  </Routes>
);

export default AppRouter;
