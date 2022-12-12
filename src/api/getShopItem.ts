import { useQuery } from 'react-query';

import { contentApi } from './content-api';
import { ShopItem } from '../constants/constants';

export const useGetShopItem = (id: string) =>
  useQuery(ShopItem, async () => {
    const res = await contentApi.getShopItem(id);

    return res;
  });
