import { LoginActionTypes } from './acitons';
import { UPDATE_LOGIN_ACTION_TYPE } from './modules/actionTypes';

export type LoginStateTypes = {
  login: boolean;
};

const init: LoginStateTypes = {
  login: false,
};

const loginReducer = (
  prev: LoginStateTypes = init,
  { type, payload }: LoginActionTypes,
): LoginStateTypes => {
  switch (type) {
    case UPDATE_LOGIN_ACTION_TYPE:
      return {
        login: payload,
      };

    default:
      return prev;
  }
};

export default loginReducer;
