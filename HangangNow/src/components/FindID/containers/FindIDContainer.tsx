import { alertMessage } from '@libs/alert';
import { apiRoute, requestPost } from '@libs/api';
import { check, REGEX, VALIDATION_FAILURE_MESSAGE } from '@libs/validation';
import { useNavigation } from '@react-navigation/native';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FindID from '../FindID';

const FindIDContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [emailInputError, setEmailInputError] =
    useState<InputResultTypes | null>(null);

  const emailValid = useMemo(
    () => email != null && check(email, REGEX.email),
    [email],
  );

  const onDoneBtnActive = useMemo(
    () => name !== null && emailValid,
    [name, emailValid],
  );

  const onDonePressed = useCallback(async () => {
    const { config } = await requestPost(
      apiRoute.auth.findId,
      {},
      {
        email,
        name,
      },
    );

    if (config.status === 200) {
      navigation.navigate('findIDStep2');
    } else if (config.status === 400) {
      setEmailInputError({
        on: true,
        msg: '존재하지 않는 이메일 입니다',
      });
    } else {
      alertMessage('오류가 발생했습니다');
    }
  }, [name, email, navigation]);

  useEffect(() => {
    setEmailInputError(null);

    if (email && !emailValid) {
      setEmailInputError({
        on: true,
        msg: VALIDATION_FAILURE_MESSAGE,
      });
    }
  }, [email, emailValid]);

  return (
    <FindID
      setName={setName}
      setEmail={setEmail}
      emailInputError={emailInputError}
      onDoneBtnActive={onDoneBtnActive}
      onDonePressed={onDonePressed}
    />
  );
};

export default FindIDContainer;
