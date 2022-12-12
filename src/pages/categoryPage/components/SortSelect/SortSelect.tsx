import React from 'react';
import * as Select from '@radix-ui/react-select';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { SelectInterface } from './interface';
import {
    StyledSelectIcon,
    StyledSelectContent,
    StyledSelectValue,
    StyledSelectTrigger,
    StyledSelectViewport,
    StyledSelectItem,
    StyledSelectItemIndicator
} from './styles';

const SortSelect = ({ options, callback, placeholder }: SelectInterface ) => (
    <Select.Root onValueChange={callback}>
        <StyledSelectTrigger>
            <StyledSelectValue placeholder={placeholder} />
            <StyledSelectIcon>
                <ExpandMoreIcon/>
            </StyledSelectIcon>
        </StyledSelectTrigger>
        <Select.Portal>
            <StyledSelectContent>
                <StyledSelectViewport>
                    <Select.Group>
                        {
                            options.map((option) => {
                               // @ts-ignore
                                return <SelectItem key={option} value={option}>{option}</SelectItem>;
                            })
                        }
                    </Select.Group>
                </StyledSelectViewport>
            </StyledSelectContent>
        </Select.Portal>
    </Select.Root>
);

// eslint-disable-next-line react/display-name,react/prop-types
const SelectItem = React.forwardRef<HTMLDivElement>(
    // @ts-ignore
    // eslint-disable-next-line react/prop-types
    ({ children, ...props }, forwardedRef) => {
    return (
        // @ts-ignore
        <StyledSelectItem {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <StyledSelectItemIndicator>
                <CheckIcon />
            </StyledSelectItemIndicator>
        </StyledSelectItem>
    );
});

export default SortSelect;
