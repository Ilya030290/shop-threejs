import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';

import { LightGray, lightViolet, Violet, White } from '../../constants/colors';

export const StyledButton = styled('button', {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: '40px',
    width: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: lightViolet,
    backgroundColor: White,
    '@media screen and (max-width: 1024px)': {
        backgroundColor: '#212121',
    },

    '&:hover': { color: Violet, backgroundColor: LightGray },
    '&:focus': { outline: 'none' },
});

export const StyledContent = styled(DropdownMenu.Content, {
    minWidth: '160px',
    backgroundColor: White,
    borderRadius: '6px',
    padding: '5px',
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
});

export const StyledItem = styled(DropdownMenu.Item, {
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '1',
    color: lightViolet,
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    position: 'relative',
    paddingLeft: '20px',
    userSelect: 'none',
    outline: 'none',

    '&:hover': { backgroundColor: lightViolet, color: White },
});
