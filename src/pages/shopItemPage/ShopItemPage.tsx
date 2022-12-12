import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

import queryClient from '../../config/query';
import { useGetShopItem } from '../../api/getShopItem';
import { cartApi } from '../../api/cart-api';
import { ROUTES } from '../../router/routes';
import useUserStore from '../../stores/userStore';
import ModalWindow from '../../components/ModalWindow';
import FullPageSpinner from '../../components/FullPageSpinner';
import { ShopItemInterface } from '../../components/ShopItem/shopItemInterface';
import { CartItemInterface } from '../cartPage/components/interface';
import { One, ShopItem, Zero } from '../../constants/constants';

const ShopItemPage = () => {

  const { id } = useParams();
  const itemId = id ? id : '';
  const { data, isLoading, isSuccess } = useGetShopItem(itemId);

  const currentUser = useUserStore(state => state.currentUser);
  const isDarkMode = useUserStore(state => state.isDarkMode);
  const setUser = useUserStore(state => state.setUser);
  const addNewCartItem = useUserStore(state => state.addNewCartItem);
  const foundCartItem = data && currentUser && currentUser.cart.find(cartItem => cartItem.id === data._id);
  const addedCount = foundCartItem ? foundCartItem.count : Zero;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    return () => {
      if (data) {
        queryClient.removeQueries(ShopItem);
      }
    };
  }, [data]);

  const onClickAddItem = async (data: ShopItemInterface) => {
    const newItem: CartItemInterface = {
      id: data._id,
      title: data.title,
      image: data.image,
      price: data.price,
      description: data.subtitle,
      category: data.category,
      count: One,
    };

    addNewCartItem(newItem);

    if (currentUser){
      const updatedUser = await cartApi.updateUserCart(
        currentUser._id,
        currentUser.name,
        currentUser.email,
        currentUser.cart
      );

      setUser(updatedUser);
    }
  };

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return (
    <>
      <main className={`${isDarkMode ? 'bg-[#212121]' : 'bg-white'} w-full min-h-75vh flex justify-center`}>
        {
          isSuccess &&
          <div className="max-md:pt-6 w-5/6 max-xl:w-full px-32 max-lg:px-11 flex items-center max-md:flex-col max-md:items-center">
            <div className="w-3/5 h-96 max-sm:h-80 max-md:mb-4 flex flex-col justify-between max-sm:justify-around items-center">
              <div className={`${isDarkMode ? 'w-64 rounded-3xl border-2 border-[#8f59bf]' : 'w-80 rounded-2xl'} h-80 max-sm:w-64 max-sm:h-64 bg-white flex items-center justify-center`}>
                <img
                    className={`h-5/6 w-5/6 object-contain`}
                    src={data.image}
                    alt={'shopItem'}
                />
              </div>
              <button className={`${isDarkMode ? 'shadow-none hover:shadow-none' : 'shadow shadow-xl hover:shadow-neutral-300'} font-sans font-bold uppercase 
                  text-base max-sm:tex-xs max-sm:font-semibold leading-4 bg-gradient-to-r from-[#ecc92b] to-[#fce25b] py-3 px-4 rounded hover:bg-gradient-to-l from-[#ecc92b] to-[#fce25b]`}
                  onClick={() => setIsOpen(true)}
              >
                watch in 3d
              </button>
              <ModalWindow currentModel={data.modelName} open={isOpen} onOpenChange={setIsOpen} />
            </div>
            <div className={`${isDarkMode ? 'shadow-none border border-[#8f59bf]' : 'shadow shadow-2xl'} min-h-96 ml-10 max-sm:ml-0 max-md:mb-8 rounded-2xl flex flex-col justify-between items-start px-4 pt-2`}>
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className={`${isDarkMode ? 'text-gray-400' : ''} font-sans font-bold text-2xl max-sm:text-xl`}>{data.title}</h1>
                  <Link className={`${isDarkMode ? 'bg-[#212121]' : 'bg-white'} w-8 h-8 rounded text-center text-gray-500 leading-7 hover:bg-[#fce25b] hover:text-black`}
                        to={ROUTES.HOME_PAGE}
                  >
                    <CloseSharpIcon />
                  </Link>
              </div>
              <div>
                <div className={`${isDarkMode ? 'border border-[#8f59bf]' : 'border border-b-gray-400'} w-full`} />
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} my-8 font-sans`}>{data.subtitle}</p>
                <div className={`${isDarkMode ? 'border border-[#8f59bf]' : 'border border-b-gray-400'} w-full`} />
              </div>
              {
                currentUser
                  ? <button
                      onClick={() => onClickAddItem(data)}
                      className="w-36 h-8 max-sm:mt-4 max-sm:mb-4 rounded-2xl bg-[#fce25b] font-sans font-medium text-sm hover:bg-black hover:text-[#fce25b]"
                    >
                      + Add to cart
                      {
                        addedCount > Zero &&
                        <span className="ml-2 px-1.5 bg-black text-center rounded-full text-[#fce25b]">{addedCount}</span>
                      }
                  </button>
                  : null
              }
              <div className="mb-10 max-md:mb-4 flex flex-col">
                <p className={`${isDarkMode ? 'text-gray-400' : ''} font-sans font-bold text-base uppercase tracking-normal`}>Hot price for today: &#128293;</p>
                <div className="mt-4 w-28 h-10 border border-4 border-emerald-500 rounded-lg text-emerald-500 font-sans font-bold text-center text-xl leading-8">
                  $ {data.price}
                </div>
              </div>
            </div>
          </div>
        }
      </main>
    </>
  );
};

export default ShopItemPage;
