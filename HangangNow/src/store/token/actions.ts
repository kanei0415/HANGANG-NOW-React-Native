import { UPDATE_TOKEN_ACTION_TYPE } from './modules/actionTypes';

export const updateToken = (accessToken: string, refreshToken: string) => ({
  type: UPDATE_TOKEN_ACTION_TYPE,
  payload: {
    accessToken,
    refreshToken,
  },
});

export type TokenActionTypes = ReturnType<typeof updateToken>;
