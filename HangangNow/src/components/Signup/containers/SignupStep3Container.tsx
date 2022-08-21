import useSignup from '@hooks/store/useSignup';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestPost } from '@libs/api';
import { formatDate } from '@libs/factory';
import { useNavigation } from '@react-navigation/native';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import {
  GenderTypes,
  SignupResponseTypes,
} from '@typedef/components/Signup/signup.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useMemo, useState } from 'react';
import SignupStep3 from '../components/SignupStep3';

const SignupStep3Container = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { body, __flushSignupFromHooks } = useSignup();

  const [name, setName] = useState<string | null>(null);
  const [nameInputDisabled, setNameInputDisabled] =
    useState<InputResultTypes | null>(null);

  const [gender, setGender] = useState<GenderTypes | null>(null);
  const [birth, setBirth] = useState<Date | null>(null);

  const doneBtnAvailable = useMemo(() => {
    return name != null && name != '' && gender != null && birth != null;
  }, [name, gender, birth]);

  const onDoneBtnPressed = useCallback(async () => {
    if (!name || !gender || !birth) {
      return;
    }

    const { data, config } = await requestPost<SignupResponseTypes>(
      apiRoute.auth.signup,
      {},
      { ...body, name, gender, birthday: formatDate(birth, 'YYYY-MM-dd') },
    );

    if (config.status === 200) {
      __flushSignupFromHooks();

      navigation.reset({
        routes: [
          {
            name: 'signupDone',
            params: {
              name: data.name,
            },
          },
        ],
      });
    } else {
      if (config.status === 400) {
        navigation.reset({
          routes: [
            {
              name: 'login',
            },
          ],
        });
      }

      alertMessage('회원가입에 실패했습니다');
    }
  }, [body, __flushSignupFromHooks, name, gender, birth, navigation]);

  return (
    <SignupStep3
      gender={gender}
      setGender={setGender}
      onDoneBtnPressed={onDoneBtnPressed}
      setName={setName}
      setBirth={setBirth}
      doneBtnAvailable={doneBtnAvailable}
    />
  );
};

export default SignupStep3Container;
