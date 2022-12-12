import React from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SwipeIcon from '@mui/icons-material/Swipe';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
import * as Dialog from '@radix-ui/react-dialog';

import Scene from '../Scene';
import { useGetModel } from '../../helpers/hooks';
import {
  StyledOverlay,
  StyledContent,
  IconHorizontalSwipe,
  IconVerticalSwipe,
  IconButton
} from './style';

const ModalWindow = ({ currentModel, open, onOpenChange } : { currentModel: string, open: boolean, onOpenChange: (open: boolean) => void }) => {

  const { model } = useGetModel(currentModel);

  if (!model) {
    return null;
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <Scene model={ model } />
          <IconHorizontalSwipe>
            <SwipeIcon />
          </IconHorizontalSwipe>
          <IconVerticalSwipe>
            <SwipeVerticalIcon />
          </IconVerticalSwipe>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <CloseSharpIcon />
            </IconButton>
          </Dialog.Close>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalWindow;
