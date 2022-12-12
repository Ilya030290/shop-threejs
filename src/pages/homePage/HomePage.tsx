import React from 'react';

import { useGetShopItems } from '../../api/getShopItems';
import { useGetCategories } from '../../api/getCategories';
import HotBid from './components/HotBid/HotBid';
import HotCollections from './components/HotCollections';
import FullPageSpinner from '../../components/FullPageSpinner';

const HomePage = () => {

  const shopItems = useGetShopItems();
  const categories = useGetCategories();

  if (shopItems.isLoading || categories.isLoading) {
    return <FullPageSpinner />;
  }

  return (
    <main>
      {
        shopItems.isSuccess && <HotBid shopItems={shopItems.data} />
      }
      {
        shopItems.isSuccess && categories.isSuccess &&
        <HotCollections shopItems={shopItems.data} categories={categories.data} />
      }
    </main>
  );
};

export default HomePage;
