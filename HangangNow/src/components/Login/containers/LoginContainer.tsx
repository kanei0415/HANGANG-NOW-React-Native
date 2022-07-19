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
import dynamiclink, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import { parseMbtiLink } from '@libs/link';

const LoginContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { login: loggined, __updateLoginFromHooks } = useLogin();
  const { loginResponse, __updateLoginResponseFromHooks } = useAuth();

  const { __setAutoLoginFromStorage } = useAutoLogin();
  const { __setLoginResponseFromStorage } = useLoginResponse();

  const [initialLink, setInitialLink] =
    useState<FirebaseDynamicLinksTypes.DynamicLink | null>(null);
  const [linkChecked, setLinkChecked] = useState(false);

  const [autoLoginedFromStorage, setAutoLoginedFromStorage] = useState(false);
  const [checkedAutoLoginedFromStorage, setCheckAutoLoginedFromStorage] =
    useState(false);
  const [autoLoginChecked, setAutoLoginChecked] = useState(false);

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const checkInitialURL = useCallback(async () => {
    const dynamicLink = await dynamiclink().getInitialLink();

    if (dynamicLink) {
      setInitialLink(dynamicLink);
    }

    setLinkChecked(true);
  }, []);

  const checkLogined = useCallback(() => {
    setAutoLoginedFromStorage(loggined && loginResponse != null);

    setCheckAutoLoginedFromStorage(true);
  }, [loggined, loginResponse]);

  const onLoginPressed = useCallback(async () => {
    if (process.env.NODE_ENV === 'development') {
      navigation.reset({
        routes: [{ name: 'mainTab' }],
      });

      return;
    }

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
    } else if (config.status === 400) {
      alertMessage('로그인 실패');
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

  useEffect(() => {
    checkInitialURL();
  }, [checkInitialURL]);

  useEffect(() => {
    if (linkChecked && checkedAutoLoginedFromStorage) {
      if (!autoLoginedFromStorage) {
        return;
      }

      if (!initialLink) {
        navigation.reset({
          routes: [{ name: 'mainTab' }],
        });
      } else {
        const mbtiUid = parseMbtiLink(initialLink);

        if (mbtiUid === 'start') {
          navigation.reset({
            routes: [
              {
                name: 'mainTab',
              },
              {
                name: 'mbti',
              },
            ],
          });

          return;
        }

        navigation.reset({
          routes: [
            {
              name: 'mainTab',
            },
            {
              name: 'mbtiResult',
              params: {
                prevUid: mbtiUid,
                result: null,
              },
            },
          ],
        });
      }
    }
  }, [linkChecked, checkedAutoLoginedFromStorage, initialLink, navigation]);

  return linkChecked && checkedAutoLoginedFromStorage ? (
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
  ) : null;
};

export default LoginContainer;
