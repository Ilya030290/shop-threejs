import { useQuery } from 'react-query';

import { contentApi } from './content-api';
import { Category } from '../constants/constants';

export const useGetCategories = () =>
  useQuery(Category, async () => {
    const res = await contentApi.getCategories();

    return res;
  });
