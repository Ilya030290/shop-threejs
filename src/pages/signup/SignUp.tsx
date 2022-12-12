import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { ROUTES } from '../../router/routes';
import useUserStore from '../../stores/userStore';
import { authApi } from '../../api/auth-api';
import { initialValues, validationSchema } from './SignUpValidationSchema';
import { RegisterPayload } from '../../types/types';
import EarthPlanet from '../login/components/EarthPlanet';
import BaseForm from '../../components/BaseForm';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import Loader from '../../components/Loader';

const SignUp = () => {
  const { mutateAsync, isLoading, isError } = useMutation(authApi.register);

  const setUser = useUserStore(state => state.setUser);
  const isDarkMode = useUserStore(state => state.isDarkMode);
  const error = useUserStore(state => state.error);
  const setError = useUserStore(state => state.setError);
  const navigate = useNavigate();

  return (
    <main className={`${isDarkMode ? 'bg-[#212121]' : 'bg-gradient-to-bl from-[#09022E] to-[#8f1c2a]'} w-full min-h-90vh m-0 box-border font-sans font-normal text-lg flex justify-center items-center`}>
        <div className="w-4/6 max-xl:w-5/6 max-xl:my-10 bg-[#ffffff] rounded-2xl flex max-lg:flex-col-reverse justify-evenly items-center px-20">
          <EarthPlanet />
          <BaseForm
            schema={validationSchema}
            initialValues={initialValues}
            onSubmit={
            async (data) => {
              try {
                const res = await mutateAsync(data as RegisterPayload);

                setUser(res.user);
                navigate(ROUTES.HOME_PAGE);

              } catch (error: any) {
                setError(error.toString());
              }
            }}
            className="h-fit flex flex-col gap-y-10 items-center rounded-xl"
          >
            <h3 className="max-xl:mt-8 font-sans text-2xl max-sm:text-base font-bold text-[#668] uppercase tracking-wider text-center">
              Signup
            </h3>
            <div className="px-6 max-sm:px-0 flex flex-col gap-y-6 items-center">
              <BaseInput name="name" type="text" placeholder="Username" />
              <BaseInput name="email" type="email" placeholder="Email" />
              <BaseInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            {
              isError
                  ? <div className="w-64 text-red-600 font-semibold text-base text-center">
                      {error}
                  </div>
                  : null
            }
            <div className="w-full flex max-sm:flex-col justify-between items-center px-6">
              <button
                className="w-32 max-sm:w-24 h-12 max-sm:h-8 max-sm:text-xs max-sm:mb-4 font-sans font-semibold text-center text-[#fff] uppercase tracking-wide rounded-3xl bg-[#666] hover:bg-[#666654]"
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                Cancel
              </button>
              {
                isLoading
                    ? <div className="w-8 h-8 mr-12 max-sm:mr-8 max-sm:mb-4">
                        <Loader />
                    </div>
                    : <BaseButton
                        type="submit"
                        className="text-[#fff] bg-[#8f1c2a] hover:bg-[#8f1c4e]"
                        disabled={isLoading}
                    >
                      Signup
                    </BaseButton>
              }
            </div>
          </BaseForm>
        </div>
    </main>
  );
};

export default SignUp;
