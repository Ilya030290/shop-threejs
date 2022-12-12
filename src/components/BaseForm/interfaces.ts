import { ComponentPropsWithoutRef } from 'react';
import { Mode } from 'react-hook-form';
import * as Yup from 'yup';

export interface BaseFormProps extends ComponentPropsWithoutRef<'form'> {
  schema: Yup.AnyObjectSchema;
  initialValues: Object;
  validationMode?: Mode;
  resetAfterSubmit?: boolean;
  className?: string;
  onSubmit: (data: Object) => void;
}
