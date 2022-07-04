import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React from 'react';
import SignupStep2 from '../components/SignupStep2';

const SignupStep2Container = ({}) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  return <SignupStep2 />;
};

export default SignupStep2Container;
