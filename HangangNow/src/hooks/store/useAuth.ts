import { updateAuth } from '@store/auth/actions';
import { RootState } from '@store/rootReducer';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useAuth() {
  const loginResponse = useSelector(
    (root: RootState) => root.authReducer.loginResponse,
  );

  const dispath = useDispatch();

  const __updateLoginResponseFromHooks = useCallback(
    (diff: LoginResponseBody) => dispath(updateAuth(diff)),
    [dispath],
  );

  return {
    loginResponse,
    __updateLoginResponseFromHooks,
  };
}
