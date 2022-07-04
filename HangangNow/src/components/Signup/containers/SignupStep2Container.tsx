import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import SignupStep2 from '../components/SignupStep2';

const SignupStep2Container = ({}) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onNextBtnPressed = useCallback(() => {
    navigation.navigate('signupStep3');
  }, [navigation]);

  return <SignupStep2 onNextBtnPressed={onNextBtnPressed} />;
};

export default SignupStep2Container;
