import React, { useState, useEffect, useCallback } from 'react';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import useAutoLogin from '@hooks/storage/useAutoLogin';
import useLogin from '@hooks/store/useLogin';
import RootNavigation from '@routes/RootNavigation';
import useLoginResponse from '@hooks/storage/useLoginResponse';
import useAuth from '@hooks/store/useAuth';
import dynamiclink from '@react-native-firebase/dynamic-links';
import { getMbtiLinkConfig } from '@libs/link';

const RootNavigationContainer = () => {
  const [isTimerEnd, setIsTimerEnd] = useState(false);

  const [autoLoginLoaded, setAutoLoginLoaded] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const { __updateLoginFromHooks } = useLogin();

  const { __getAutoLoginFromStorage } = useAutoLogin();

  const { __updateLoginResponseFromHooks } = useAuth();

  const { __getLoginResponseFromStorage } = useLoginResponse();

  const __test__generateLink = useCallback(async () => {
    const link = await dynamiclink().buildShortLink(
      getMbtiLinkConfig('test-mbti-uid-001'),
    );

    console.log(link);
  }, []);

  const loadAutoLogin = useCallback(async () => {
    const login = await __getAutoLoginFromStorage();

    __updateLoginFromHooks(login);

    setAutoLoginLoaded(true);
  }, [__getAutoLoginFromStorage, __updateLoginFromHooks]);

  const loadLoginResponseBody = useCallback(async () => {
    const loginResponse = await __getLoginResponseFromStorage();

    if (loginResponse) {
      __updateLoginResponseFromHooks(loginResponse);
    }

    setAuthLoaded(true);
  }, [__getLoginResponseFromStorage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimerEnd(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      __test__generateLink();
    }
  }, [__test__generateLink]);

  useEffect(() => {
    loadAutoLogin();
    loadLoginResponseBody();
  }, [loadAutoLogin, loadLoginResponseBody]);

  return isTimerEnd && autoLoginLoaded && authLoaded ? (
    <RootNavigation />
  ) : (
    <SplashContainer />
  );
};

export default RootNavigationContainer;
