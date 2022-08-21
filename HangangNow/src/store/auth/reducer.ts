import { LOGIN_RESPONSE_STORAGE_KEY_VALUE } from '@hooks/storage/useLoginResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import { AuthActionTypes } from './actions';
import { UPDATE_AUTH_ACTION_TYPE } from './modules/actionTypes';

export type AuthStateTypes = {
  loginResponse: LoginResponseBody | null;
};

const init: AuthStateTypes = {
  loginResponse: null,
};

const authReducer = (
  prev: AuthStateTypes = init,
  { type, payload }: AuthActionTypes,
): AuthStateTypes => {
  switch (type) {
    case UPDATE_AUTH_ACTION_TYPE: {
      AsyncStorage.setItem(
        LOGIN_RESPONSE_STORAGE_KEY_VALUE,
        JSON.stringify(payload),
      );

      return {
        loginResponse: payload,
      };
    }

    default:
      return prev;
  }
};

export default authReducer;
