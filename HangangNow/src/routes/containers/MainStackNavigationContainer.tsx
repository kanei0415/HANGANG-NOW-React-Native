import useAutoLogin from '@hooks/storage/useAutoLogin';
import useLoginResponse from '@hooks/storage/useLoginResponse';
import useAuth from '@hooks/store/useAuth';
import useLogin from '@hooks/store/useLogin';
import useProfile from '@hooks/store/useProfile';
import { apiRoute, requestPost, requestSecureGet } from '@libs/api';
import MainStackNavigation from '@routes/components/MainStackNavigation';
import { ProfileTypes } from '@typedef/components/common/common.types';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import React, { useCallback, useEffect } from 'react';

const MainStackNavigationContainer = () => {
  const { login } = useLogin();
  const { loginResponse, __updateLoginResponseFromHooks } = useAuth();
  const { __getAutoLoginFromStorage, __setAutoLoginFromStorage } =
    useAutoLogin();
  const { __setLoginResponseFromStorage } = useLoginResponse();
  const { __updateProfileFromHooks } = useProfile();

  const loadProfile = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data: profileData, config } = await requestSecureGet<ProfileTypes>(
      apiRoute.member.loadProfile,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      __updateProfileFromHooks(profileData);
    } else if (config.status === 401) {
      const { data: newLoginResponse, config } =
        await requestPost<LoginResponseBody>(
          apiRoute.auth.refresh,
          {},
          {
            accessToken: loginResponse.accessToken,
            refreshToken: loginResponse.refreshToken,
            autoLogin: await __getAutoLoginFromStorage(),
          },
        );

      if (config.status === 200) {
        __updateLoginResponseFromHooks(newLoginResponse);
        __setLoginResponseFromStorage(newLoginResponse);

        const { data: profileData, config } =
          await requestSecureGet<ProfileTypes>(
            apiRoute.member.loadProfile,
            {},
            loginResponse.accessToken,
          );

        if (config.status === 200) {
          __updateProfileFromHooks(profileData);
        }
      }
    }
  }, [loginResponse, __updateLoginResponseFromHooks, __updateProfileFromHooks]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return <MainStackNavigation login={login} loginResponse={loginResponse} />;
};

export default MainStackNavigationContainer;
