import RootNavigation from '@routes/RootNavigation';
import React, { useState, useEffect } from 'react';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import useAutoLogin from '@hooks/components/useAutoLogin';
import useLogin from '@hooks/store/useLogin';
import { RootState } from '@store/rootReducer';
import { useSelector } from 'react-redux';

const SPLASH_INTERVAL = 350;

const RootNavigationContainer = () => {
  const { loggedIn } = useSelector((root: RootState) => root.loginReducer);

  const [isEndSplashTimer, setIsEndSplashTimer] = useState<boolean>(false);

  const { __updateLoginFromHooks } = useLogin();

  const { getAutoLoggedIn } = useAutoLogin();

  useEffect(() => {
    setTimeout(() => {
      setIsEndSplashTimer(true);
    }, SPLASH_INTERVAL);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const autoLoggedIn = await getAutoLoggedIn();
      __updateLoginFromHooks(autoLoggedIn);
    }, 0);
  }, []);

  if (!isEndSplashTimer || !loggedIn) {
    return <SplashContainer />;
  }
  return <RootNavigation loggedIn={loggedIn} />;
};

export default RootNavigationContainer;
