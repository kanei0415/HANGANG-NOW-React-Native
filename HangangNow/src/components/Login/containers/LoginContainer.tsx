import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import Login from '../Login';

const LoginContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);

  const onEmailSignupPressed = useCallback(() => {
    navigation.navigate('signup');
  }, [navigation]);

  const onKakaoSignupPressed = useCallback(() => {}, []);

  return (
    <Login
      onEmailSignupPressed={onEmailSignupPressed}
      onKakaoSignupPressed={onKakaoSignupPressed}
      autoLoginChecked={autoLoginChecked}
      setAutoLoginChecked={setAutoLoginChecked}
    />
  );
};

export default LoginContainer;
