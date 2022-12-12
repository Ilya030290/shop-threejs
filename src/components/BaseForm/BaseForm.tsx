import { FunctionComponent } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { BaseFormProps } from './interfaces';

const BaseForm: FunctionComponent<BaseFormProps> = ({
  schema,
  initialValues,
  validationMode = 'onBlur',
  resetAfterSubmit = false,
  className,
  onSubmit,
  children,
  ...props
}) => {
  const methods = useForm({
    mode: validationMode,
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const { handleSubmit, reset } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={handleSubmit((data) => {
          onSubmit(data);

          if (resetAfterSubmit) reset();
        })}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default BaseForm;
