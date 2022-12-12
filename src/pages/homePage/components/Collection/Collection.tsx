import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CollectionInterface } from './categoriesInterface';
import useUserStore from '../../../../stores/userStore';

const Collection = ({ name, shopItems } :CollectionInterface) => {

  const navigate = useNavigate();
  const isDarkMode = useUserStore(state => state.isDarkMode);

  const filteredItems = shopItems.filter((shopItem) => shopItem.category === name);

  return (
    <article
      className={`${isDarkMode ? 'border border-[#8f59bf] shadow-none text-white' : 'shadow shadow-xl'} my-2 flex flex-col p-1 rounded-xl cursor-pointer`}
      onClick={() => navigate(`/categories/${name}`)}
    >
      <main className={`${isDarkMode ? 'bg-white rounded-xl lg:mt-4' : ''} lg:mx-10`}>
        <img className="w-full h-64 max-sm:h-52 object-contain mb-2 rounded-lg"
             src={filteredItems[0].image}
             alt="collection-image"
        />
        <div className="mb-3 flex flex-row justify-evenly items-center">
          <img className="w-32 max-sm:w-16 h-24 max-sm:h-14 object-contain rounded-lg"
               src={filteredItems[1].image}
               alt="collection-image"
          />
          <img className="w-32 max-sm:w-16 h-24 max-sm:h-14 object-contain rounded-lg"
               src={filteredItems[2].image}
               alt="collection-image"
          />
          <img className="w-28 max-sm:w-16 h-24 max-sm:h-14 object-contain rounded-lg"
               src={filteredItems[0].image}
               alt="collection-image"
          />
        </div>
        <h3 className="mb-3 font-bold font-sans text-black text-xl max-sm:text-base pl-10 max-md:pl-2">
          {name}
        </h3>
      </main>
      <footer>
        <div className="flex flex-row items-center justify-between px-10 max-md:px-2 pb-4 mt-3">
          <div className="flex flex-row items-center">
            <img className="w-7 h-7 rounded-full"
                 src={'https://cdn-icons-png.flaticon.com/512/194/194938.png'}
                 alt="avatar-image"
            />
            <p className="text-gray-400 font-semibold text-sm font-sans">
              by some User
            </p>
          </div>
          <div className={`${isDarkMode ? 'border border-gray-400 text-gray-400' : 'border border-gray-300'} font-sans font-bold text-sm border-2 rounded-lg px-2`}>
            20K VIEWS
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Collection;
