import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCategories } from '../../api/getCategories';
import useUserStore from '../../stores/userStore';
import { Phones } from '../../constants/constants';
import FullPageSpinner from '../../components/FullPageSpinner';
import SmartphoneImage from '../../assets/illustration-vector-smartphone-icon.jpg';
import TabletImage from '../../assets/stock-illustration-hand-holding-smartphone-with-blank.jpg';

const CategoriesPage = () => {

  const { data, isSuccess, isLoading } = useGetCategories();
  const navigate = useNavigate();
  const isDarkMode = useUserStore(state => state.isDarkMode);

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return (
    <main className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : ''} w-full min-h-90vh flex max-md:flex-col items-center justify-evenly`}>
      {
        isSuccess &&
        data.map(category => {
          return (
            <div
              key={category._id}
              className="relative h-80 max-md:h-56 max-lg:h-64 w-96 max-md:w-64 max-lg:w-72 rounded-2xl hover:cursor-pointer transition ease-in-out delay-150 hover:scale-110 duration-200"
              onClick={() => navigate(`/categories/${category.name}`)}
            >
              <h2 className="absolute top-36 max-md:top-24 max-lg:top-28 left-36 max-md:left-20 max-lg:left-24 font-sans font-bold text-[#fff] text-xl uppercase tracking-widest z-10 hover:underline">
                {category.name}
              </h2>
              <img
                className={`${category.name === Phones ? '' : 'object-cover'} w-full h-full rounded-2xl`}
                src={category.name === Phones ? SmartphoneImage : TabletImage}
                alt={'categoryImage'}
              />
          </div>
          );
        })
      }
    </main>
  );
};

export default CategoriesPage;
