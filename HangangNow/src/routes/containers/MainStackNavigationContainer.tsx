import useAuth from '@hooks/store/useAuth';
import useLogin from '@hooks/store/useLogin';
import MainStackNavigation from '@routes/components/MainStackNavigation';
import React from 'react';

const MainStackNavigationContainer = () => {
  const { login } = useLogin();
  const { loginResponse } = useAuth();

  return <MainStackNavigation login={login} loginResponse={loginResponse} />;
};

export default MainStackNavigationContainer;
