import { FunctionComponent } from 'react';

import { BaseButtonProps } from './interface';

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  className,
  children,
  ...props
}) => (
  <button
    className={`m-0 w-32 max-sm:w-24 h-12 max-sm:h-8 max-sm:text-xs font-sans font-semibold uppercase tracking-wide rounded-3xl ${className}`}
    {...props}
    disabled={props.disabled}
  >
    {children}
  </button>
);

export default BaseButton;
