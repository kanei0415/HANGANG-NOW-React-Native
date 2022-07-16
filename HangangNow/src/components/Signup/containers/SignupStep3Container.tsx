import { useNavigation } from '@react-navigation/native';
import { GenderTypes } from '@typedef/components/Signup/signup.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import SignupStep3 from '../components/SignupStep3';

const SignupStep3Container = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [gender, setGender] = useState<GenderTypes | null>(null);
  const [birth, setBirth] = useState<Date | null>(null);

  const onDoneBtnPressed = useCallback(
    () =>
      navigation.reset({
        routes: [
          {
            name: 'signupDone',
            params: {
              name: '홍길동',
            },
          },
        ],
      }),
    [navigation],
  );

  return (
    <SignupStep3
      gender={gender}
      setGender={setGender}
      onDoneBtnPressed={onDoneBtnPressed}
    />
  );
};

export default SignupStep3Container;
