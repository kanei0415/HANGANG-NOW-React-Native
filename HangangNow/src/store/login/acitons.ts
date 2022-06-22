import { UPDATE_LOGIN_ACTION_TYPE } from './modules/actionTypes';

export const updateLoginAction = (loggedIn: boolean) => ({
  type: UPDATE_LOGIN_ACTION_TYPE,
  payload: { loggedIn },
});

export type LoginActionTypes = ReturnType<typeof updateLoginAction>;
