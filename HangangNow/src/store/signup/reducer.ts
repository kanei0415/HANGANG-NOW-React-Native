import { SignupBodyTypes } from '@typedef/components/Signup/signup.types';
import { SignupActionTypes } from './actions';
import {
  FILL_SIGNUP_ACTION_TYPES,
  FLUSH_SIGNUP_ACTION_TYPES,
} from './modules/actionTypes';

export type SignupStateTypes = {
  body: Partial<SignupBodyTypes>;
};

const init: SignupStateTypes = {
  body: {},
};

const signupReducer = (
  prev: SignupStateTypes = init,
  { type, payload }: SignupActionTypes,
): SignupStateTypes => {
  switch (type) {
    case FILL_SIGNUP_ACTION_TYPES:
      return {
        body: { ...prev.body, ...payload },
      };

    case FLUSH_SIGNUP_ACTION_TYPES:
      return init;

    default:
      return prev;
  }
};

export default signupReducer;
