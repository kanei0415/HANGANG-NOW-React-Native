import React, { useState, useEffect, useCallback } from 'react';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import useAutoLogin from '@hooks/storage/useAutoLogin';
import useLogin from '@hooks/store/useLogin';
import RootNavigation from '@routes/RootNavigation';

const RootNavigationContainer = () => {
  const [isTimerEnd, setIsTimerEnd] = useState(false);

  const [autoLoginLoaded, setAutoLoginLoaded] = useState(false);

  const { __updateLoginFromHooks } = useLogin();

  const { __getAutoLoginFromStorage } = useAutoLogin();

  const loadAutoLogin = useCallback(async () => {
    const login = await __getAutoLoginFromStorage();

    __updateLoginFromHooks(login);

    setAutoLoginLoaded(true);
  }, [__getAutoLoginFromStorage, __updateLoginFromHooks]);

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
  }, [loadAutoLogin]);

  return isTimerEnd && autoLoginLoaded ? (
    <RootNavigation />
  ) : (
    <SplashContainer />
  );
};

export default RootNavigationContainer;
