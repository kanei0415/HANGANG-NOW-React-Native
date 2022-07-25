import { alertMessage } from '@libs/alert';
import { apiRoute, requestPost } from '@libs/api';
import { check, REGEX, VALIDATION_FAILURE_MESSAGE } from '@libs/validation';
import { useNavigation } from '@react-navigation/native';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FindPW from '../FindPW';

const FindPWContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [name, setName] = useState<string | null>(null);

  const [email, setEmail] = useState<string | null>(null);
  const [emailInputError, setEmailInputError] =
    useState<InputResultTypes | null>(null);
  const [emailInputSuccess, setEmailInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [emailInputDisabled, setEmailInputDisabled] =
    useState<InputResultTypes | null>(null);
  const [emailDuplicatedChecked, setEmailDuplicatedCheck] = useState(false);
  const [emailDuplicated, setEmailDuplicated] = useState<boolean | null>(null);

  const [answer, setAnswer] = useState<string | null>(null);

  const [code, setCode] = useState<string | null>(null);
  const [codeSended, setCodeSended] = useState(false);
  const [codeInputError, setCodeInputError] = useState<InputResultTypes | null>(
    null,
  );
  const [codeInputSuccess, setCodeInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [emailCodeChecked, setEmailCodeChecked] = useState(false);

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

  const emailDone = useMemo(() => {
    return emailValid && emailCodeChecked;
  }, [emailValid, emailCodeChecked]);

  const emailCodeCheckDone = useMemo(() => {
    return emailValid && codeValid && emailCodeChecked;
  }, [emailValid, codeValid, emailCodeChecked]);

  const doneBtnActive = useMemo(
    () => emailDone && emailCodeCheckDone && name != null,
    [emailDone, emailCodeCheckDone, name],
  );

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

        if (!data) {
          setEmailInputError({
            on: true,
            msg: '존재하지 않는 이메일 입니다',
          });
        } else {
          setEmailInputSuccess({
            on: true,
            msg: '인증코드가 발송되었습니다',
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
      const { data, config } = await requestPost<{ code: string }>(
        apiRoute.auth.authCodeSend,
        {},
        { email },
      );

      if (config.status === 200) {
        alertMessage('인증번호가 전송되었습니다');

        setCodeSended(true);

        setAnswer(data.code);
      } else {
        alertMessage('인증번호 전송에 실패했습니다');
      }
    }
  }, [onEmailDuplicatedCheck]);

  const onCodeCheckPressed = useCallback(async () => {
    if (!email || !code || !emailValid || !codeValid || !answer) {
      return;
    }

    setEmailCodeChecked(code === answer);
  }, [email, code, emailValid, codeValid, answer]);

  const onDonePressed = useCallback(() => {
    if (!email) {
      return;
    }

    navigation.navigate('findPWDone', {
      email,
    });
  }, [navigation, email]);

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
    <FindPW
      setName={setName}
      setEmail={setEmail}
      emailInputError={emailInputError}
      emailInputSuccess={emailInputSuccess}
      emailInputDisabled={emailInputDisabled}
      emailValid={emailValid}
      codeCheckBtnAvailable={codeCheckBtnAvailable}
      onEmailCheckPressed={onEmailCheckPressed}
      codeSendAvailable={codeSendAvailable}
      setCode={setCode}
      codeInputError={codeInputError}
      codeInputSuccess={codeInputSuccess}
      onCodeCheckPressed={onCodeCheckPressed}
      emailCodeCheckDone={emailCodeCheckDone}
      doneBtnActive={doneBtnActive}
      onDonePressed={onDonePressed}
    />
  );
};

export default FindPWContainer;
