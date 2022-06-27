import { UPDATE_LOGIN_ACTION_TYPE } from './modules/actionTypes';

export const updateLoginAction = (login: boolean) => ({
  type: UPDATE_LOGIN_ACTION_TYPE,
  payload: login,
});

export type LoginActionTypes = ReturnType<typeof updateLoginAction>;
