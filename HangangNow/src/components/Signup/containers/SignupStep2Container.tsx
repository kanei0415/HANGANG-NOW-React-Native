import useSignup from '@hooks/store/useSignup';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestPost } from '@libs/api';
import { check, REGEX, VALIDATION_FAILURE_MESSAGE } from '@libs/validation';
import { useNavigation } from '@react-navigation/native';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import SignupStep2 from '../components/SignupStep2';

const SignupStep2Container = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { __fillSignupFromHooks } = useSignup();

  const [loginId, setLoginId] = useState<string | null>(null);
  const [loginIdInputError, setLoginIdInputError] =
    useState<InputResultTypes | null>(null);
  const [loginIdInputSuccess, setLoginIdInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [loginIdDuplicatedChecked, setLoginIdDuplicatedChecked] =
    useState(false);
  const [loginIdDuplicated, setLoginIdDuplicated] = useState<boolean | null>(
    null,
  );

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

  const [email, setEmail] = useState<string | null>(null);
  const [emailInputError, setEmailInputError] =
    useState<InputResultTypes | null>(null);
  const [emailInputSuccess, setEmailInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [emailInputDisabled, setEmailInputDisabled] =
    useState<InputResultTypes | null>(null);
  const [emailDuplicatedChecked, setEmailDuplicatedCheck] = useState(false);
  const [emailDuplicated, setEmailDuplicated] = useState<boolean | null>(null);

  const [code, setCode] = useState<string | null>(null);
  const [codeSended, setCodeSended] = useState(false);
  const [codeInputError, setCodeInputError] = useState<InputResultTypes | null>(
    null,
  );
  const [codeInputSuccess, setCodeInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [emailCodeChecked, setEmailCodeChecked] = useState(false);

  const loginIdValid = useMemo(
    () => loginId != null && loginId != '' && check(loginId, REGEX.loginId),
    [loginId],
  );

  const passwordValid = useMemo(
    () =>
      password !== null && password !== '' && check(password, REGEX.password),
    [password],
  );

  const passwordMatched = useMemo(
    () => password === passwordConfirm,
    [password, passwordConfirm],
  );

  const emailValid = useMemo(
    () => email !== null && email !== '' && check(email, REGEX.email),
    [email],
  );

  const codeValid = useMemo(
    () => code != null && code != '' && check(code, REGEX.code),
    [code],
  );

  const codeSendAvailable = useMemo(
    () => emailValid && emailDuplicatedChecked && !emailDuplicated,
    [emailValid, emailDuplicatedChecked, emailDuplicated],
  );

  const codeCheckBtnAvailable = useMemo(
    () => emailValid && codeSended,
    [emailValid, codeSended],
  );

  const emailCodeCheckDone = useMemo(() => {
    return emailValid && codeValid && emailCodeChecked;
  }, [emailValid, codeValid, emailCodeChecked]);

  const nextBtnAvailable = useMemo(() => emailCodeChecked, [emailCodeChecked]);

  const onNextBtnPressed = useCallback(() => {
    if (nextBtnAvailable && loginId && password && email) {
      __fillSignupFromHooks({
        loginId,
        password,
        email,
      });

      navigation.navigate('signupStep3');
    }
  }, [nextBtnAvailable, loginId, password, email, navigation]);

  const onLoginIdDuplicateCheckPressed = useCallback(async () => {
    const { data, config } = await requestPost<boolean>(
      apiRoute.auth.checkId,
      {},
      { loginId },
    );

    if (config.status === 200) {
      setLoginIdDuplicated(data);
      setLoginIdDuplicatedChecked(true);

      if (data) {
        setLoginIdInputError({
          on: true,
          msg: '이미 등록된 아이디입니다',
        });
      } else {
        setLoginIdInputSuccess({
          on: true,
          msg: '사용 가능한 아이디입니다',
        });
      }
    } else {
      setLoginIdDuplicated(false);
      setLoginIdDuplicatedChecked(false);

      alertMessage('로그인 아이디 증복 체크에 실패했습니다');
    }
  }, [loginId]);

  const onEmailDuplicatedCheck = useCallback(async () => {
    if (emailValid) {
      const { data, config } = await requestPost<boolean>(
        apiRoute.auth.checkEmail,
        {},
        { email },
      );

      if (config.status === 200) {
        setEmailDuplicatedCheck(true);

        setEmailDuplicated(data);

        if (data) {
          setEmailInputError({
            on: true,
            msg: '이미 등록된 이메일 입니다',
          });
        } else {
          setEmailInputSuccess({
            on: true,
            msg: '사용 가능한 이메일 입니다',
          });

          return true;
        }
      } else {
        setEmailDuplicatedCheck(false);
        setEmailDuplicated(false);

        alertMessage('이메일 중복 체크에 실패했습니다');
      }
    }

    return false;
  }, [email, emailValid]);

  const onEmailCheckPressed = useCallback(async () => {
    const send = await onEmailDuplicatedCheck();

    if (send) {
      const { config } = await requestPost(
        apiRoute.auth.authCodeSend,
        {},
        { email },
      );

      if (config.status === 200) {
        alertMessage('인증번호가 전송되었습니다');

        setCodeSended(true);
      } else {
        alertMessage('인증번호 전송에 실패했습니다');
      }
    }
  }, [email, onEmailDuplicatedCheck]);

  const onCodeCheckPressed = useCallback(async () => {
    if (!email || !code || !emailValid || !codeValid) {
      return;
    }

    const { data, config } = await requestPost<boolean>(
      apiRoute.auth.checkCode,
      {},
      {
        email,
        code,
      },
    );

    if (config.status === 200) {
      setEmailCodeChecked(data);

      if (data) {
        setEmailInputDisabled({
          on: true,
          msg: email,
        });

        setEmailInputSuccess({
          on: true,
          msg: '이메일 인증이 완료 되었습니다',
        });
      }
    } else {
      alertMessage('인증번호 확인에 실패했습니다');
    }
  }, [emailValid, codeValid, email, code]);

  useEffect(() => {
    setLoginIdDuplicatedChecked(false);

    setLoginIdInputError(null);
    setLoginIdInputSuccess(null);

    if (loginId && !loginIdValid) {
      setLoginIdInputError({
        on: true,
        msg: VALIDATION_FAILURE_MESSAGE,
      });
    }
  }, [loginIdValid, loginId]);

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

  useEffect(() => {
    setEmailDuplicatedCheck(false);
    setEmailCodeChecked(false);

    setCodeSended(false);

    setEmailInputError(null);
    setEmailInputSuccess(null);

    if (email) {
      if (!emailValid) {
        setEmailInputError({
          on: true,
          msg: VALIDATION_FAILURE_MESSAGE,
        });
      }
    }
  }, [email, emailValid]);

  useEffect(() => {
    setCodeInputError(null);
    setCodeInputSuccess(null);

    if (code) {
      if (!codeValid) {
        setCodeInputError({
          on: true,
          msg: VALIDATION_FAILURE_MESSAGE,
        });
      }
    }
  }, [code, codeValid]);

  return (
    <SignupStep2
      setLoginId={setLoginId}
      loginIdInputError={loginIdInputError}
      loginIdInputSuccess={loginIdInputSuccess}
      loginIdValid={loginIdValid}
      onLoginIdDuplicateCheckPressed={onLoginIdDuplicateCheckPressed}
      setPassword={setPassword}
      passwordInputError={passwordInputError}
      passwordInputSuccess={passwordInputSuccess}
      setPasswordConfirm={setPasswordConfirm}
      passwordConfirmInputError={passwordConfirmInputError}
      passwordConfirmInputSuccess={passwordConfirmInputSuccess}
      onNextBtnPressed={onNextBtnPressed}
      setEmail={setEmail}
      emailInputError={emailInputError}
      emailInputSuccess={emailInputSuccess}
      emailInputDisabled={emailInputDisabled}
      emailValid={emailValid}
      codeCheckBtnAvailable={codeCheckBtnAvailable}
      nextBtnAvailable={nextBtnAvailable}
      onEmailCheckPressed={onEmailCheckPressed}
      codeSendAvailable={codeSendAvailable}
      setCode={setCode}
      codeInputError={codeInputError}
      codeInputSuccess={codeInputSuccess}
      onCodeCheckPressed={onCodeCheckPressed}
      emailCodeCheckDone={emailCodeCheckDone}
    />
  );
};

export default SignupStep2Container;
