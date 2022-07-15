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
    case UPDATE_AUTH_ACTION_TYPE:
      return {
        loginResponse: payload,
      };

    default:
      return prev;
  }
};

export default authReducer;
