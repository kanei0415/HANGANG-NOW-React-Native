import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import Login from '../Login';
import { login, getProfile } from '@react-native-seoul/kakao-login';

const LoginContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);

  const onLoginPressed = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'mainTab' }],
    });
  }, [navigation]);

  const onEmailSignupPressed = useCallback(() => {
    navigation.navigate('signup');
  }, [navigation]);

  const onKakaoSignupPressed = useCallback(async () => {
    const token = await login().catch((err) => {
      if (err + '' === 'Error: user cancelled.') {
        return null;
      }
    });

    if (!token) {
      return;
    }
  }, []);

  const onFindIDPressed = useCallback(
    () => navigation.navigate('findID'),
    [navigation],
  );

  const onFindPWPressed = useCallback(
    () => navigation.navigate('findPW'),
    [navigation],
  );

  return (
    <Login
      onEmailSignupPressed={onEmailSignupPressed}
      onKakaoSignupPressed={onKakaoSignupPressed}
      autoLoginChecked={autoLoginChecked}
      setAutoLoginChecked={setAutoLoginChecked}
      onFindIDPressed={onFindIDPressed}
      onFindPWPressed={onFindPWPressed}
      onLoginPressed={onLoginPressed}
    />
  );
};

export default LoginContainer;
