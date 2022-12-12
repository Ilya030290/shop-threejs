import React from 'react';
import { useParams } from 'react-router-dom';

import useUserStore from '../../stores/userStore';
import { getFilteredSortedShopItemsByCategory } from '../../api/getShopItems';
import CategoryShopItem from './components/CategoryShopItem';
import FullPageSpinner from '../../components/FullPageSpinner';
import SortSelect from './components/SortSelect';
import { ShopItemInterface } from '../../components/ShopItem/shopItemInterface';
import {
  All,
  Apple,
  Brand,
  Google,
  Huawei,
  LabelForFilter,
  LabelForSort,
  NotSelected,
  OnePlus,
  Price,
  Samsung,
  Title,
} from '../../constants/constants';

const CategoryPage = () => {

  const { categoryName } = useParams();
  const name = categoryName ? categoryName : '';

  const [data, setData] = React.useState<ShopItemInterface[] | undefined>();
  const [selectedOption, setSelectedOption] = React.useState<string>(NotSelected);
  const [selectedFilterButton, setSelectedFilterButton] = React.useState<string>(All);
  const options = [Brand, Price, Title];
  const filterButtons = [All, Apple, Samsung, Huawei, OnePlus, Google];
  const placeHolderForSort = LabelForSort;
  const placeHolderStringForFilter = LabelForFilter;
  const isDarkMode = useUserStore(state => state.isDarkMode);

  React.useEffect(() => {
    getFilteredSortedShopItemsByCategory(name, selectedFilterButton, selectedOption)
      .then(res => setData(res));
  }, [name, selectedFilterButton, selectedOption]);

  if (!data) {
    return <FullPageSpinner />;
  }

  const onClickFilterData = (brandName: string) => {
    setSelectedFilterButton(brandName);
  };

  const onClickSortItems = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  return (
    <main className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : ''} h-full flex flex-col max-md:items-center`}>
      <h2 className="py-4 max-md:py-1 pl-24 max-md:pl-0 font-sans font-bold text-4xl max-md:text-lg uppercase tracking-wider">
        { name }
      </h2>
      <div className={`${isDarkMode ? 'border-t border-t-[#8f59bf]' : 'border-t border-t-gray-300'} w-full h-full flex flex-row max-md:flex-col max-md:items-center`}>
        <div className={`${isDarkMode ? 'bg-[#212121]' : 'bg-gray-50 max-md:bg-white'} w-1/5 max-md:w-4/5 max-sm:w-full h-134 max-md:h-20 max-md:flex max-md:items-center max-md:justify-between pt-10 px-8`}>
          <div className="my-10 h-56 flex flex-col justify-between max-md:hidden">
            {
              filterButtons.map(buttonName => (
                <button
                  key={buttonName}
                  className={`${selectedFilterButton === buttonName ? 'bg-gray-300 text-black border-gray-400' : 'bg-gray-100 text-black border border-gray-300'} ${isDarkMode && selectedFilterButton === buttonName ? 'bg-[#8f59bf]' : ''} w-full hover:bg-gray-300 h-8 rounded hover:text-black`}
                  onClick={() => onClickFilterData(buttonName)}
                >
                  { buttonName }
                </button>
              ))
            }
          </div>
          <div className="md:hidden max-sm:h-10">
            <SortSelect
                selectedOption={selectedFilterButton}
                options={filterButtons}
                placeholder={placeHolderStringForFilter}
                callback={(option) => onClickFilterData(option)}
            />
          </div>
          <div className="ml-14 max-lg:ml-0 max-xl:ml-6 max-sm:ml-0 max-md:h-10">
            <SortSelect
                selectedOption={selectedOption}
                options={options}
                placeholder={placeHolderForSort}
                callback={(option) => onClickSortItems(option)}
            />
          </div>
        </div>
        <div className={`${isDarkMode ? 'border-l border-l-[#8f59bf]' : 'border-l border-l-gray-300'} w-4/5 max-md:w-full max-md:min-h-80vh ml-1/5 max-md:ml-0 flex flex-col items-center max-md:border-none`}>
          {
            data && (data.length !== 0)
              ? data.map(item => (
                <CategoryShopItem
                  key={item._id}
                  {...item}
                />
              ))
              : <h2 className="font-sans font-semibold text-base text-gray-600 mt-52 max-md:mt-1/3">
                No relevant items found on request &#128557;
                </h2>
          }
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
