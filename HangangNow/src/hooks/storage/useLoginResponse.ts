import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import { useCallback } from 'react';

const LOGIN_RESPONSE_STORAGE_KEY_VALUE = '@loginResponse';

export default function useLoginResponse() {
  const __getLoginResponseFromStorage = useCallback(async () => {
    const data = await AsyncStorage.getItem(LOGIN_RESPONSE_STORAGE_KEY_VALUE);

    return data ? (JSON.parse(data) as LoginResponseBody) : null;
  }, []);

  const __setLoginResponseFromStorage = useCallback(
    async (loginResponseBody: LoginResponseBody) => {
      await AsyncStorage.setItem(
        LOGIN_RESPONSE_STORAGE_KEY_VALUE,
        JSON.stringify(loginResponseBody),
      );
    },
    [],
  );

  return {
    __getLoginResponseFromStorage,
    __setLoginResponseFromStorage,
  };
}
