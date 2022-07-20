import { RootState } from '@store/rootReducer';
import { fillSignupAction, flushSignupAction } from '@store/signup/actions';
import { SignupBodyTypes } from '@typedef/components/Signup/signup.types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useSignup() {
  const { body } = useSelector((root: RootState) => root.signupReducer);

  const dispatch = useDispatch();

  const __fillSignupFromHooks = useCallback(
    (diff: Partial<SignupBodyTypes>) => dispatch(fillSignupAction(diff)),
    [dispatch],
  );

  const __flushSignupFromHooks = useCallback(
    () => dispatch(flushSignupAction()),
    [dispatch],
  );

  return {
    body,
    __fillSignupFromHooks,
    __flushSignupFromHooks,
  };
}
