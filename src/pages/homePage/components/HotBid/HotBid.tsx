import React from 'react';

import { HotBidInterface } from './hotBidInterface';
import ShopItemsSlider from '../../../../components/Slider/ShopItemsSlider/ShopItemsSlider';
import useUserStore from '../../../../stores/userStore';

const HotBid = ({ shopItems }: HotBidInterface) => {

    const isDarkMode = useUserStore(state => state.isDarkMode);

    return(
        <div className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : ''} w-full h-134 flex justify-center`}>
            <ShopItemsSlider shopItems={shopItems} />
        </div>
    );
};

export default HotBid;
