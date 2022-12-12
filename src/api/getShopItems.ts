import { useQuery } from 'react-query';

import { contentApi } from './content-api';
import { ShopItems } from '../constants/constants';

export const useGetShopItems = () =>
  useQuery(ShopItems, async () => {
    const res = await contentApi.getShopItems();

    return res;
  });

export const getFilteredSortedShopItemsByCategory = async (categoryName: string, brandName: string, sortType: string) => {
  const res = await contentApi.getFilteredSortedShopItemsByCategory(categoryName, brandName, sortType);

  return res;
};
