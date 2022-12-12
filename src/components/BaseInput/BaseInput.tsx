import { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';

import { BaseInputProps } from './interfaces';

const BaseInput: FunctionComponent<BaseInputProps> = ({
  name,
  label,
  Icon,
  ...props
}) => {
  const { register, formState } = useFormContext();
  const errorMessage = formState.errors[name]?.message;

  return (
    <label className="flex flex-col items-center">
      {label && <span>{label}</span>}
      <span className="flex items-center w-full h-12 max-sm:h-8 px-2 font-sans font-semibold max-sm:text-sm text-lg text-[#668] rounded-3xl bg-[#e6e6e6] focus-within:outline">
        {Icon && <Icon />}
        <input
          id={name}
          className="w-full h-full bg-[#e6e6e6] outline-0 p-2 rounded-3xl"
          autoComplete="off"
          {...register(name)}
          {...props}
        />
      </span>
      {errorMessage && typeof errorMessage === 'string' && (
        <span className="text-red-600 text-xs" role="alert">
          {errorMessage}
        </span>
      )}
    </label>
  );
};

export default BaseInput;
