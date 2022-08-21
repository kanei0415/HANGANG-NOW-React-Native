import { SignupBodyTypes } from '@typedef/components/Signup/signup.types';
import {
  FILL_SIGNUP_ACTION_TYPES,
  FLUSH_SIGNUP_ACTION_TYPES,
  SETUP_SIGNUP_TYPE_ACTION_TYPES,
} from './modules/actionTypes';

export const fillSignupAction = (diff: Partial<SignupBodyTypes>) => ({
  type: FILL_SIGNUP_ACTION_TYPES,
  payload: diff,
});

export const flushSignupAction = () => ({
  type: FLUSH_SIGNUP_ACTION_TYPES,
  payload: {},
});

export const setupSignupTypeAction = (type: 'default' | 'kakao') => ({
  type: SETUP_SIGNUP_TYPE_ACTION_TYPES,
  payload: type,
});

export type SignupActionTypes =
  | ReturnType<typeof fillSignupAction>
  | ReturnType<typeof flushSignupAction>
  | ReturnType<typeof setupSignupTypeAction>;
