import { TokenActionTypes } from './actions';
import { UPDATE_TOKEN_ACTION_TYPE } from './modules/actionTypes';

export type TokenStateType = {
  accessToken: string | null;
  refreshToken: string | null;
};

const init: TokenStateType = {
  accessToken: null,
  refreshToken: null,
};

const tokenReducer = (
  prev: TokenStateType = init,
  { type, payload }: TokenActionTypes,
): TokenStateType => {
  switch (type) {
    case UPDATE_TOKEN_ACTION_TYPE:
      return payload;
    default:
      return prev;
  }
};

export default tokenReducer;
