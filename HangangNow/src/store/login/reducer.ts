import { LoginActionTypes } from './acitons';
import { UPDATE_LOGIN_ACTION_TYPE } from './modules/actionTypes';

export type LoginStateTypes = {
  loggedIn: boolean;
};

const init: LoginStateTypes = {
  loggedIn: false,
};

const loginReducer = (
  prev: LoginStateTypes = init,
  { type, payload }: LoginActionTypes,
): LoginStateTypes => {
  switch (type) {
    case UPDATE_LOGIN_ACTION_TYPE:
      return { ...prev, ...payload };
    default:
      return prev;
  }
};

export default loginReducer;
