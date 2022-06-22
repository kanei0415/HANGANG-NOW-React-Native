import RootNavigation from '@routes/RootNavigation';
import React, { useState, useEffect } from 'react';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import useAutoLogin from '@hooks/components/useAutoLogin';

const SPLASH_INTERVAL = 350;

const RootNavigationContainer = () => {
  const [isEndSplashTimer, setIsEndSplashTimer] = useState<boolean>(false);

  const { getAutoLoggedIn } = useAutoLogin();

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEndSplashTimer(true);
      clearInterval(interval);
    }, SPLASH_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      setLoggedIn(await getAutoLoggedIn());
    }, 0);

    return () => {
      clearInterval(interval);
    };
  }, [getAutoLoggedIn]);

  if (!isEndSplashTimer && !loggedIn) {
    return <SplashContainer />;
  }
  return <RootNavigation loggedIn={loggedIn} />;
};

export default RootNavigationContainer;
