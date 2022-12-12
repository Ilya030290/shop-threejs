import React from 'react';
import { Link } from 'react-router-dom';

import useUserStore from '../../stores/userStore';
import { ROUTES } from '../../router/routes';
import ErrorImage from './../../assets/404-d652ff855b1335dd3eedc3baa8dc8b69.gif';

const NotFound = () => {

    const isDarkMode = useUserStore(state => state.isDarkMode);

    return (
        <main className={`${isDarkMode ? 'bg-[#212121] text-gray-400' : 'bg-white text-[#484848]'} w-full min-h-90vh flex items-center justify-center font-sans`}>
            <div className="w-4/5 max-md:w-full flex justify-evenly max-sm:flex-col max-sm:items-center">
                <div className="h-full w-1/3 max-sm:w-full max-sm:px-4 max-sm:mb-8 flex-col justify-between text-center">
                    <h1 className="font-bold text-7xl max-md:text-4xl mb-6 mt-8">Oops!</h1>
                    <h2 className="font-semibold text-2xl max-lg:text-xl mb-6">We can’t find the page you’re looking for.</h2>
                    <p className="font-semibold text-base mb-10">Error 404...page not found</p>
                    <p className="font-semibold text-base">
                        You can try to return to the <Link to={ROUTES.HOME_PAGE} className="underline font-bold">Home page</Link>
                    </p>
                </div>
                <img className={`${isDarkMode ? 'hidden' : ''} max-sm:w-64`} src={ErrorImage} alt="error_image" />
            </div>
        </main>
    );
};

export default NotFound;
