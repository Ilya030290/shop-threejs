import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { ROUTES } from '../../router/routes';
import useUserStore from '../../stores/userStore';
import { authApi } from '../../api/auth-api';
import { initialValues, validationSchema } from './LoginValidationSchema';
import { LoginPayload } from '../../types/types';
import CubeComponent from '../signup/components/CubeComponent';
import BaseForm from '../../components/BaseForm';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import Loader from '../../components/Loader';

const Login = () => {
  const { mutateAsync, isLoading, isError } = useMutation(authApi.login);

  const setUser = useUserStore(state => state.setUser);
  const isDarkMode = useUserStore(state => state.isDarkMode);
  const error = useUserStore(state => state.error);
  const setError = useUserStore(state => state.setError);
  const navigate = useNavigate();

  return (
    <main className={`${isDarkMode ? 'bg-[#212121]' : 'bg-gradient-to-bl from-[#09022E] to-[#278A79]'} w-full min-h-90vh m-0 box-border font-sans font-normal text-lg flex justify-center items-center`}>
        <div className="w-4/6 max-xl:w-5/6 max-xl:my-10 max-lg:flex-col-reverse bg-[#ffffff] rounded-2xl flex justify-evenly items-center px-20">
          <CubeComponent />
          <BaseForm
            schema={validationSchema}
            initialValues={initialValues}
            onSubmit={
            async(data) => {
              try {
                const res = await mutateAsync(data as LoginPayload);

                setUser(res.user);
                navigate(ROUTES.HOME_PAGE);

              } catch (error: any) {
                setError(error.toString());
              }
            }}
            className="px-4 flex flex-col items-center gap-y-8 rounded-xl max-sm:px-0"
          >
            <h3 className="max-xl:mt-8 mt-4 mb-8 font-sans max-sm:text-base max-sm:mb-0 text-2xl font-bold text-[#668] uppercase tracking-wider text-center">
              Log In
            </h3>
            <BaseInput name="email" type="email" placeholder="Email" />
            <BaseInput name="password" type="password" placeholder="Password" />
            {
              isError
                  ? <div className="w-64 text-red-600 font-semibold text-base text-center">
                    {error}
                  </div>
                  : null
            }
            {
              isLoading
                  ? <div className="w-8 h-8">
                      <Loader />
                  </div>
                  : <BaseButton
                      type="submit"
                      disabled={isLoading}
                      className="text-[#fff] bg-[#278A79] hover:bg-[#278A68] m-0"
                  >
                    Log in
                  </BaseButton>
            }
            <Link
                className="font-sans font-normal max-md:text-xs max-md:w-32 text-base text-gray-400 tracking-wide hover:text-[#278A79]"
                to={ROUTES.SIGNUP}
            >
              Create your Account
            </Link>
          </BaseForm>
        </div>
    </main>
  );
};

export default Login;
