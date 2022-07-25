import React, { useState, useEffect, useCallback } from 'react';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import useAutoLogin from '@hooks/storage/useAutoLogin';
import useLogin from '@hooks/store/useLogin';
import RootNavigation from '@routes/RootNavigation';
import useLoginResponse from '@hooks/storage/useLoginResponse';
import useAuth from '@hooks/store/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    loadAutoLogin();
    loadLoginResponseBody();
  }, [loadAutoLogin, loadLoginResponseBody]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      AsyncStorage.getAllKeys().then((keys) => {
        keys.forEach((key) => {
          AsyncStorage.getItem(key).then((value) => {
            console.log('[Storage]', key, value ? JSON.parse(value) : null);
          });
        });
      });

      dynamiclink()
        .buildShortLink(getMbtiLinkConfig())
        .then((val) => console.log('[Linking]', val));

      dynamiclink()
        .buildShortLink(getMbtiLinkConfig('TEST_MBTI_UID'))
        .then((val) => console.log('[Linking]', val));
    }
  }, []);

  return isTimerEnd && autoLoginLoaded && authLoaded ? (
    <RootNavigation />
  ) : (
    <SplashContainer />
  );
};

export default RootNavigationContainer;
