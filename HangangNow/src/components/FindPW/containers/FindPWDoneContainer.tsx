import { apiRoute, requestPut } from '@libs/api';
import { check, REGEX, VALIDATION_FAILURE_MESSAGE } from '@libs/validation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import {
  MainStackNavigationTypes,
  MainStackParamListTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FindPWDone from '../components/FindPWDone';

const FindPWDoneContainer = ({
  route: {
    params: { email },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'findPWDone'>) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [password, setPassword] = useState<string | null>(null);
  const [passwordInputError, setPasswordInputError] =
    useState<InputResultTypes | null>(null);
  const [passwordInputSuccess, setPasswordInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState<string | null>(null);
  const [passwordConfirmInputError, setPasswordConfirmInputError] =
    useState<InputResultTypes | null>(null);
  const [passwordConfirmInputSuccess, setPasswordConfirmInputSuccess] =
    useState<InputResultTypes | null>(null);

  const passwordValid = useMemo(
    () =>
      password !== null && password !== '' && check(password, REGEX.password),
    [password],
  );

  const passwordMatched = useMemo(
    () => password === passwordConfirm,
    [password, passwordConfirm],
  );

  const passwordDone = useMemo(
    () => passwordValid && passwordMatched,
    [passwordValid],
  );

  const doneBtnActive = useMemo(() => passwordDone, [passwordDone]);

  const onDonePressed = useCallback(() => {
    const {} = requestPut(
      apiRoute.auth.findPassword,
      {},
      {
        email,
        password1: password,
        password2: password,
      },
    );

    navigation.reset({
      routes: [{ name: 'login' }],
    });
  }, [email, password, navigation]);

  useEffect(() => {
    setPasswordInputError(null);
    setPasswordInputSuccess(null);

    if (password) {
      if (passwordValid) {
        setPasswordInputSuccess({
          on: true,
          msg: '',
        });
      } else {
        setPasswordInputError({
          on: true,
          msg: VALIDATION_FAILURE_MESSAGE,
        });
      }
    }
  }, [passwordValid, password]);

  useEffect(() => {
    setPasswordConfirmInputError(null);
    setPasswordConfirmInputSuccess(null);

    if (passwordConfirm) {
      if (passwordMatched) {
        setPasswordConfirmInputSuccess({
          on: true,
          msg: '',
        });
      } else {
        setPasswordConfirmInputError({
          on: true,
          msg: '비밀번호가 일치하지 않습니다',
        });
      }
    }
  }, [passwordMatched, passwordConfirm]);

  return (
    <FindPWDone
      setPassword={setPassword}
      passwordInputError={passwordInputError}
      passwordInputSuccess={passwordInputSuccess}
      setPasswordConfirm={setPasswordConfirm}
      passwordConfirmInputError={passwordConfirmInputError}
      passwordConfirmInputSuccess={passwordConfirmInputSuccess}
      doneBtnActive={doneBtnActive}
      onDonePressed={onDonePressed}
    />
  );
};

export default FindPWDoneContainer;
