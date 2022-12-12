import React from 'react';
import Slider from 'react-slick';

import { CategoriesInterface } from '../../../pages/homePage/components/Collection/categoriesInterface';
import { ShopItemInterface } from '../../ShopItem/shopItemInterface';
import Collection from '../../../pages/homePage/components/Collection';
import '../slick.css';
import '../slick-theme.css';

const CategoriesSlider = ({ categories, shopItems }: { categories: CategoriesInterface[], shopItems: ShopItemInterface[]}) => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
      responsive: [
          {
              breakpoint: 710,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  };

  return (
    <div className="w-3/5 h-full">
      <h2 className="mb-4 font-sans font-bold text-4xl max-sm:text-2xl">Hot collections</h2>
      <Slider {...settings}>
        {
          categories.map(category => (
            <Collection
              key={category._id}
              {...category}
              shopItems={shopItems}
            />
          ))
        }
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
