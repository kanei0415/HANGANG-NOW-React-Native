import RootNavigation from '@routes/RootNavigation';
import React, { useState, useEffect } from 'react';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import useAutoLogin from '@hooks/components/useAutoLogin';
import useLogin from '@hooks/store/useLogin';

const SPLASH_INTERVAL = 350;

const RootNavigationContainer = () => {
  const [isEndSplashTimer, setIsEndSplashTimer] = useState<boolean>(false);

  const [isLoadedAutoLogin, setIsLoadedAutoLogin] = useState<boolean>(false);

  const { loggedIn, __updateLoginFromHooks } = useLogin();

  const { getAutoLoggedIn } = useAutoLogin();

  useEffect(() => {
    setTimeout(() => {
      setIsEndSplashTimer(true);
    }, SPLASH_INTERVAL);
  }, []);

  useEffect(() => {
    getAutoLoggedIn().then((autoLoggedIn) => {
      setIsLoadedAutoLogin(true);
      __updateLoginFromHooks(autoLoggedIn);
    });
  }, [getAutoLoggedIn, __updateLoginFromHooks]);

  return (
    <>
      {isEndSplashTimer && isLoadedAutoLogin ? (
        <RootNavigation loggedIn={loggedIn} />
      ) : (
        <SplashContainer />
      )}
    </>
  );
};

export default RootNavigationContainer;
