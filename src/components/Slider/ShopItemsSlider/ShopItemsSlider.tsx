import React from 'react';
import Slider from 'react-slick';

import ShopItem from '../../ShopItem';
import { ShopItemInterface } from '../../ShopItem/shopItemInterface';
import '../slick.css';
import '../slick-theme.css';

const ShopItemsSlider = ({ shopItems }: { shopItems: ShopItemInterface[] }) => {
    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
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
            <h2 className="mt-6 mb-4 font-sans font-bold text-4xl max-sm:text-2xl">Hot bid</h2>
            <Slider {...settings}>
                {
                    shopItems.map(item => <ShopItem key={item._id} {...item} />)
                }
            </Slider>
        </div>
    );
};

export default ShopItemsSlider;
