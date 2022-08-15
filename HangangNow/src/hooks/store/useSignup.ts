import { RootState } from '@store/rootReducer';
import {
  fillSignupAction,
  flushSignupAction,
  setupSignupTypeAction,
} from '@store/signup/actions';
import { SignupBodyTypes } from '@typedef/components/Signup/signup.types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useSignup() {
  const { body, type } = useSelector((root: RootState) => root.signupReducer);

  const dispatch = useDispatch();

  const __fillSignupFromHooks = useCallback(
    (diff: Partial<SignupBodyTypes>) => dispatch(fillSignupAction(diff)),
    [dispatch],
  );

  const __flushSignupFromHooks = useCallback(
    () => dispatch(flushSignupAction()),
    [dispatch],
  );

  const __setupSignupTypeFromHooks = useCallback(
    (diff: 'default' | 'kakao') => dispatch(setupSignupTypeAction(diff)),
    [dispatch],
  );

  return {
    body,
    type,
    __fillSignupFromHooks,
    __flushSignupFromHooks,
    __setupSignupTypeFromHooks,
  };
}
