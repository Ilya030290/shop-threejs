import { FunctionComponent, SVGProps, ComponentPropsWithoutRef } from 'react';

export interface BaseInputProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  label?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}
