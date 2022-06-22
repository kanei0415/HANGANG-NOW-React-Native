import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

const LOGGED_IN = '@loggedIn';

export default function useAutoLogin() {
  const getAutoLoggedIn = useCallback(async () => {
    return JSON.parse(
      (await AsyncStorage.getItem(LOGGED_IN)) ?? 'false',
    ) as boolean;
  }, []);

  const setAutoLoggedIn = useCallback(async (loggedIn: boolean) => {
    await AsyncStorage.setItem(LOGGED_IN, String(loggedIn));
  }, []);

  return {
    getAutoLoggedIn,
    setAutoLoggedIn,
  };
}
