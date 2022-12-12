import * as Yup from 'yup';

export const validationSchema = Yup.object()
  .shape({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(6, 'Min length is 6!'),
  })
  .required();

export const initialValues = {
  email: '',
  password: '',
};
