import { updateLoginAction } from '@store/login/acitons';
import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useLogin() {
  const loggedIn = useSelector((root: RootState) => root.loginReducer.loggedIn);

  const dispatch = useDispatch();

  const __updateLoginFromHooks = useCallback(
    (loggedIn: boolean) => dispatch(updateLoginAction(loggedIn)),
    [dispatch],
  );

  return {
    loggedIn,
    __updateLoginFromHooks,
  };
}
