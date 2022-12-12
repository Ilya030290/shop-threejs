import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ThemeSwitch from '../Switch';
import { ROUTES } from '../../router/routes';
import useUserStore from '../../stores/userStore';
import { getCartItemsCount } from '../../helpers/functions';
import { User } from '../../types/types';
import { StyledButton, StyledContent, StyledItem } from './styles';
import { authApi } from '../../api/auth-api';

const DropDownMenu = ({ currentUser }: { currentUser: User | null }) => {

    const setUser = useUserStore(state => state.setUser);
    const cartItemsCount = currentUser && getCartItemsCount(currentUser.cart);
    const logOut = async () => {
        await authApi.logout();
        setUser(null);
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <StyledButton>
                    <MenuIcon/>
                </StyledButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <StyledContent sideOffset={5}>
                    {
                        currentUser
                            ? <>
                                <StyledItem>
                                    <AccountCircleIcon />
                                    <span className="ml-2 text-gray-400">{currentUser.name}</span>
                                </StyledItem>
                                <button
                                    className="w-24 h-8 bg-white text-[#8f59bf] text-center rounded-2xl"
                                    onClick={logOut}
                                >
                                    Log Out
                                </button>
                                <StyledItem>
                                    <Link to={ROUTES.CART_PAGE}>
                                        Your cart
                                        <ShoppingCartIcon className="ml-2"/>
                                        <span className="ml-2">{cartItemsCount}</span>
                                    </Link>
                                </StyledItem>
                            </>
                            : <StyledItem>
                                <Link to={ROUTES.LOGIN}>
                                    Login/SignUp
                                </Link>
                            </StyledItem>
                    }
                    <StyledItem>
                        <Link to={ROUTES.HOME_PAGE}>
                            Catalog
                        </Link>
                    </StyledItem>
                    <StyledItem>
                        <Link to={ROUTES.CATEGORIES}>
                            Categories
                        </Link>
                    </StyledItem>
                    <ThemeSwitch />
                </StyledContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropDownMenu;
