import { updateLoginAction } from '@store/login/acitons';
import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useLogin() {
  const login = useSelector((root: RootState) => root.loginReducer.login);

  const dispatch = useDispatch();

  const __updateLoginFromHooks = useCallback(
    (diff: boolean) => dispatch(updateLoginAction(diff)),
    [dispatch],
  );

  return {
    login,
    __updateLoginFromHooks,
  };
}
