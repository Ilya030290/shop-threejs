import { styled } from '@stitches/react';
import * as Select from '@radix-ui/react-select';

import { White, Black, LightGray, lightViolet } from '../../../../constants/colors';

export const StyledSelectTrigger = styled(Select.Trigger, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    padding: '0 15px',
    fontSize: '15px',
    lineHeight: '1',
    height: '35px',
    gap: '5px',
    backgroundColor: White,
    color: lightViolet,

    '&:focus': { outline: 'none' },
});

export const StyledSelectIcon = styled(Select.Icon, {
    color: lightViolet,
});

export const StyledSelectValue = styled(Select.Value, {
    color: Black,
});

export const StyledSelectContent = styled(Select.Content, {
    overflow: 'hidden',
    backgroundColor: White,
    borderRadius: '6px',
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const StyledSelectViewport = styled(Select.Viewport, {
    padding: '5px',
});

export const StyledSelectItem = styled(Select.Item, {
    fontSize: '15px',
    lineHeight: '1',
    color: lightViolet,
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    height: '25px',
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',

    '&:hover': { backgroundColor: lightViolet, color: LightGray, outline: 'none' },
});

export const StyledSelectItemIndicator = styled(Select.ItemIndicator, {
    position: 'absolute',
    left: '0',
    width: '25px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});
