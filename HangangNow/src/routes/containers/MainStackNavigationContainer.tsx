import useAuth from '@hooks/store/useAuth';
import useLogin from '@hooks/store/useLogin';
import useProfile from '@hooks/store/useProfile';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import MainStackNavigation from '@routes/components/MainStackNavigation';
import { ProfileTypes } from '@typedef/components/common/common.types';
import React, { useCallback, useEffect } from 'react';

const MainStackNavigationContainer = () => {
  const { login } = useLogin();
  const { loginResponse } = useAuth();

  const { __updateProfileFromHooks } = useProfile();

  const loadProfile = useCallback(async () => {
    if (!loginResponse?.accessToken) {
      return;
    }

    const { data, config } = await requestSecureGet<ProfileTypes>(
      apiRoute.member.loadProfile,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      __updateProfileFromHooks(data);
    } else {
      alertMessage('프로필 정보를 불러오지 못했습니다');
    }
  }, [loginResponse, __updateProfileFromHooks]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return <MainStackNavigation login={login} loginResponse={loginResponse} />;
};

export default MainStackNavigationContainer;
