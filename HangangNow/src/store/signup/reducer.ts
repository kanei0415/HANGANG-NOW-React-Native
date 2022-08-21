import { SignupBodyTypes } from '@typedef/components/Signup/signup.types';
import { SignupActionTypes } from './actions';
import {
  FILL_SIGNUP_ACTION_TYPES,
  FLUSH_SIGNUP_ACTION_TYPES,
  SETUP_SIGNUP_TYPE_ACTION_TYPES,
} from './modules/actionTypes';

export type SignupStateTypes = {
  body: Partial<SignupBodyTypes>;
  type: 'kakao' | 'default';
};

const init: SignupStateTypes = {
  body: {},
  type: 'default',
};

const signupReducer = (
  prev: SignupStateTypes = init,
  { type, payload }: SignupActionTypes,
): SignupStateTypes => {
  switch (type) {
    case FILL_SIGNUP_ACTION_TYPES:
      return {
        ...prev,
        body: { ...prev.body, ...payload },
      };

    case FLUSH_SIGNUP_ACTION_TYPES:
      return init;

    case SETUP_SIGNUP_TYPE_ACTION_TYPES:
      return {
        ...prev,
        type: payload,
      };

    default:
      return prev;
  }
};

export default signupReducer;
