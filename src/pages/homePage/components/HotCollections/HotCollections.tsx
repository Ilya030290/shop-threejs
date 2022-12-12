import React from 'react';

import useUserStore from '../../../../stores/userStore';
import { HotCollectionsInterface } from './hotCollectionsInterface';
import CategoriesSlider from '../../../../components/Slider/CategoriesSlider';

const HotCollections = ({ categories, shopItems }: HotCollectionsInterface) => {

    const isDarkMode = useUserStore(state => state.isDarkMode);

    return (
        <div className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : 'bg-[#FFFAFA]'} w-full h-140 max-sm:h-134 pt-6 flex justify-center`}>
            <CategoriesSlider
                categories={categories}
                shopItems={shopItems}
            />
        </div>
    );
};

export default HotCollections;
