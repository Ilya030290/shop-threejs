import { axiosInstance } from '../config/axiosInstance';
import { ShopItemInterface } from '../components/ShopItem/shopItemInterface';
import { CategoriesInterface } from '../pages/homePage/components/Collection/categoriesInterface';

export const contentApi = {
  getShopItem: (id: string) => {
    return  axiosInstance.get<unknown, ShopItemInterface>(`/shop-items/${id}`);
  },
  getShopItems: () => {
    return axiosInstance.get<unknown, ShopItemInterface[]>('/shop-items');
  },
  getFilteredSortedShopItemsByCategory: (categoryName: string, brandName: string, sortType: string) => {
    return axiosInstance.get<unknown, ShopItemInterface[]>(`/shop-items?category=${categoryName}&brand=${brandName}&sort=${sortType}`);
  },
  getCategories: () => {
    return axiosInstance.get<unknown, CategoriesInterface[]>('/categories');
  },
};
