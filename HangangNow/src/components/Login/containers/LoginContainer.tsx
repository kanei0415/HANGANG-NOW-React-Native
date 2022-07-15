import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import Login from '../Login';
import { login } from '@react-native-seoul/kakao-login';
import { apiRoute, requestPost } from '@libs/api';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import useAutoLogin from '@hooks/storage/useAutoLogin';
import useLoginResponse from '@hooks/storage/useLoginResponse';
import useLogin from '@hooks/store/useLogin';
import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';

const LoginContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { login: loggined, __updateLoginFromHooks } = useLogin();
  const { loginResponse, __updateLoginResponseFromHooks } = useAuth();

  const { __setAutoLoginFromStorage } = useAutoLogin();
  const { __setLoginResponseFromStorage } = useLoginResponse();

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const checkLogined = useCallback(() => {
    if (loggined && loginResponse) {
      navigation.reset({
        routes: [{ name: 'mainTab' }],
      });
    }
  }, [loggined, loginResponse, navigation]);

  const onLoginPressed = useCallback(async () => {
    const { data, config } = await requestPost<LoginResponseBody>(
      apiRoute.auth.login,
      {},
      { loginId, password },
    );

    if (config.status === 200) {
      if (autoLoginChecked) {
        __updateLoginFromHooks(true);
        __setAutoLoginFromStorage(true);

        __updateLoginResponseFromHooks(data);
        __setLoginResponseFromStorage(data);
      }

      navigation.reset({
        routes: [{ name: 'mainTab' }],
      });
    } else {
      alertMessage('로그인에 실패 했습니다');
    }
  }, [
    loginId,
    password,
    autoLoginChecked,
    __updateLoginFromHooks,
    __setLoginResponseFromStorage,
    __updateLoginResponseFromHooks,
    __setLoginResponseFromStorage,
    navigation,
  ]);

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

  useEffect(() => {
    checkLogined();
  }, [checkLogined]);

  return (
    <Login
      setLoginId={setLoginId}
      setPassword={setPassword}
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
