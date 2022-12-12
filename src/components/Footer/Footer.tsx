import React from 'react';
import { Link } from 'react-router-dom';

import useUserStore from '../../stores/userStore';
import { ROUTES } from '../../router/routes';
import Image from '../../assets/mainLogo.png';

const Footer = () => {

    const isDarkMode = useUserStore(state => state.isDarkMode);

    return (
        <footer className={`${isDarkMode ? 'bg-[#212121] text-gray-400 border-t border-t-[#8f59bf]' : 'bg-gray-100 border-t border-t-gray-300'} w-full min-h-20vh max-md:min-h-10vh flex justify-center items-center`}>
            <div className="w-3/5 max-lg:w-4/5 h-full flex max-md:items-center justify-between">
                <div className="w-44 h-full flex flex-col justify-center max-md:justify-evenly max-md:items-center">
                    <div className="flex justify-center">
                        <img className="w-10 max-md:w-7 h-10 max-md:h-7" src={Image} alt="cubeImage"/>
                        <h3 className=" mt-2 ml-3 max-sm:ml-1 font-sans font-bold text-sm max-md:text-xs">Pix Mobile</h3>
                    </div>
                    <h3 className="max-md:hidden mt-2 pl-8 font-sans font-semibold text-base">The New Creative Economy</h3>
                </div>
                <div className="w-44 h-full flex flex-col justify-evenly items-start max-md:items-center">
                    <h3 className="font-sans font-bold text-base max-md:hidden">Pix Mobile</h3>
                    <Link className="font-sans font-semibold text-base text-gray-600 max-md:text-xs" to={ROUTES.HOME_PAGE}>
                        Discover
                    </Link>
                    <Link className="font-sans font-semibold text-base text-gray-600 max-md:text-xs" to={ROUTES.HOME_PAGE}>
                        Connect Wallet
                    </Link>
                </div>
                <div className="w-44 h-full flex flex-col justify-evenly items-start max-md:items-center">
                    <h3 className="font-sans font-bold text-base max-md:hidden">Info</h3>
                    <Link className="font-sans font-semibold text-base text-gray-600 max-md:text-xs" to={ROUTES.HOME_PAGE}>
                        Download
                    </Link>
                    <Link className="font-sans font-semibold text-base text-gray-600 max-md:text-xs" to={ROUTES.HOME_PAGE}>
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
