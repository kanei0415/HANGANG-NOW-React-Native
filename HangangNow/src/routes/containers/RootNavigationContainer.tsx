import RootNavigation from '@routes/RootNavigation';
import React from 'react';
import useLogin from '@hooks/store/useLogin';

const RootNavigationContainer = () => {
  const { loggedIn } = useLogin();

  return <RootNavigation loggedIn={loggedIn} />;
};

export default RootNavigationContainer;
