import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ShopItemInterface } from '../../../../components/ShopItem/shopItemInterface';
import { Phones } from '../../../../constants/constants';
import useUserStore from '../../../../stores/userStore';

const CategoryShopItem = ({ _id, title, subtitle, category, image, price }: ShopItemInterface) => {

  const isDarkMode = useUserStore(state => state.isDarkMode);
  const navigate = useNavigate();

  return (
    <article
      className="w-full h-72 flex justify-center items-center hover:cursor-pointer"
      onClick={() => navigate(`/categories/${category}/${_id}`)}
    >
      <main className="w-full h-56 mx-6 max-md:mx-2 flex">
        <div className={`${isDarkMode ? 'bg-white w-56 px-3 flex items-center justify-center rounded-lg' : ''} max-md:h-44`}>
          <img className={`${isDarkMode ? 'w-full h-full rounded-2xl' : 'w-56 h-full'} max-md:h-40 object-contain`}
               src={ image }
               alt={'itemImage'}
          />
        </div>
        <div className="w-full h-full ml-4 max-md:ml-2">
          <p className="pt-4 max-md:pt-0 font-sans font-bold max-md:text-sm">
            { category === Phones ? <span>Smartphone</span> : <span>Tablet</span> }
            <span className="ml-2 max-md:ml-1">{ title }</span>
          </p>
          <p className={`${isDarkMode ? 'border-b border-b-[#8f59bf]' : 'border-b border-b-gray-300'} mt-6 max-md:mt-1 pb-2 max-md:text-xs`}>
            { subtitle }
          </p>
          <div className="mt-6 max-sm:mt-2 flex items-center">
            <span className="mr-2 font-sans font-semibold max-md:text-sm tracking-wider">from</span>
            <div className="w-20 h-8 max-sm:h-6 rounded text-[#fff] bg-orange-500 font-sans font-normal leading-8 max-sm:leading-6 text-center">
              $ { price }
            </div>
          </div>
          <div className="mt-3 max-sm:mt-1">
            &#11088;&#11088;&#11088;&#11088;&#11088;
          </div>
        </div>
      </main>
    </article>
  );
};

export default CategoryShopItem;
