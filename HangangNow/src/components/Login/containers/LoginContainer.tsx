import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import Login from '../Login';
import { login, getProfile } from '@react-native-seoul/kakao-login';

const LoginContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);

  const onEmailSignupPressed = useCallback(() => {
    navigation.navigate('signup');
  }, [navigation]);

  const onKakaoSignupPressed = useCallback(async () => {
    const token = await login();
  }, []);

  const onFindIDPressed = useCallback(
    () => navigation.navigate('findID'),
    [navigation],
  );

  return (
    <Login
      onEmailSignupPressed={onEmailSignupPressed}
      onKakaoSignupPressed={onKakaoSignupPressed}
      autoLoginChecked={autoLoginChecked}
      setAutoLoginChecked={setAutoLoginChecked}
      onFindIDPressed={onFindIDPressed}
    />
  );
};

export default LoginContainer;
