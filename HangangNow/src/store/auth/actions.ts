import { LoginResponseBody } from '@typedef/components/Login/login.types';
import { UPDATE_AUTH_ACTION_TYPE } from './modules/actionTypes';

export const updateAuth = (diff: LoginResponseBody) => ({
  type: UPDATE_AUTH_ACTION_TYPE,
  payload: diff,
});

export type AuthActionTypes = ReturnType<typeof updateAuth>;
