import React from 'react';
import { ImportExport } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import useUserStore from '../../stores/userStore';
import { ShopItemInterface } from './shopItemInterface';

const ShopItem = ({ _id, image, title, price, category }: ShopItemInterface) => {

  const isDarkMode = useUserStore(state => state.isDarkMode);
  const navigate = useNavigate();

  return(
    <article
      className={`${isDarkMode ? 'border border-[#8f59bf] shadow-none' : 'shadow shadow-xl'} h-96 my-2 p-2 rounded-xl cursor-pointer overflow-hidden`}
      onClick={() => navigate(`/categories/${category}/${_id}`)}
    >
      <header className={`${isDarkMode ? 'bg-white rounded' : ''}  flex flex-row justify-center items-center`}>
        <img className="w-48 h-56 object-contain mb-3 rounded-xl"
             src={image}
             alt="item-image"
        />
      </header>
      <main>
        <div className="mb-2 h-10 flex flex-row justify-between items-center">
          <h3 className="font-sans font-bold text-sm">{title}</h3>
          <div className="w-16 h-8 inline border border-4  border-green-600 rounded-lg text-green-600 text-base font-sans font-bold text-center">
            ${price}
          </div>
        </div>
        <div className="relative mb-2 flex flex-row justify-between items-center">
          <img className="w-7 h-7 rounded-full"
               src={'https://cdn-icons-png.flaticon.com/512/194/194938.png'}
               alt="avatar-image"
          />
          <img className="absolute top-0 left-3 z-1 w-7 h-7 rounded-full"
               src={'https://cdn-icons-png.flaticon.com/512/194/194938.png'}
               alt="avatar-image"
          />
          <img className="absolute top-0 left-6 z-2 w-7 h-7 rounded-full"
               src={'https://cdn-icons-png.flaticon.com/512/194/194938.png'}
               alt="avatar-image"
          />
          <span className="font-bold text-xs">3 in stock</span>
        </div>
      </main>
      <footer>
        <div className={`${isDarkMode ? 'border border-[#8f59bf]' : 'border border-t-gray-50'} mb-2`} />
        <div className="flex flex-row justify-between items-center">
          <div>
            <ImportExport className="text-gray-400" />
            <span className="text-gray-400 text-xs font-sans">
              some text <span className={`${isDarkMode ? 'text-gray-400' : 'text-black'} font-bold font-sans text-xs`}>${price}</span>
            </span>
          </div>
          <span className="text-xs text-gray-400">some text &#128293;</span>
        </div>
      </footer>
    </article>
  );
};

export default ShopItem;
