import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

export const AUTOLOGIN_STORAGE_KEY_VALUE = '@autologin';

export default function useAutoLogin() {
  const __getAutoLoginFromStorage = useCallback(async () => {
    return JSON.parse(
      (await AsyncStorage.getItem(AUTOLOGIN_STORAGE_KEY_VALUE)) ?? 'false',
    ) as boolean;
  }, []);

  const __setAutoLoginFromStorage = useCallback(async (autologin: boolean) => {
    await AsyncStorage.setItem(AUTOLOGIN_STORAGE_KEY_VALUE, autologin + '');
  }, []);

  return {
    __getAutoLoginFromStorage,
    __setAutoLoginFromStorage,
  };
}
