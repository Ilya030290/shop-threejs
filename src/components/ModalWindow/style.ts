import { keyframes, styled } from '@stitches/react';
import * as Dialog from '@radix-ui/react-dialog';

import {
  Black,
  GranadaBlack,
  White,
  Gray,
  MidnightBlack,
} from '../../constants/colors';

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: GranadaBlack,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledContent = styled(Dialog.Content, {
  backgroundColor: White,
  borderRadius: 8,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55vw',
  height: '85vh',
  padding: 15,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '@media screen and (max-width: 1280px)': {
    width: '70vw',
  },
  '@media screen and (max-width: 640px)': {
    height: '70vh',
  },
  '@media screen and (max-width: 480px)': {
    width: '95vw',
  },
});

export const IconButton = styled('button', {
  color: Gray,
  position: 'absolute',
  top: 20,
  right: 20,

  '&:hover': { color: Black },
});

export const IconHorizontalSwipe = styled('div', {
  color: MidnightBlack,
  position: 'absolute',
  bottom: 20,
  left: '44%',
});

export const IconVerticalSwipe = styled('div', {
  color: MidnightBlack,
  position: 'absolute',
  bottom: 20,
  left: '52%',
});