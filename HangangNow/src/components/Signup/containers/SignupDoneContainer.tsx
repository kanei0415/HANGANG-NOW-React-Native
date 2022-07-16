import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  MainStackNavigationTypes,
  MainStackParamListTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import SignupDone from '../components/SignupDone';

const SignupDoneContainer = ({
  route,
}: NativeStackScreenProps<MainStackParamListTypes, 'signupDone'>) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onDonePressed = useCallback(
    () =>
      navigation.reset({
        routes: [{ name: 'login' }],
      }),
    [navigation],
  );

  return <SignupDone name={route.params.name} onDonePressed={onDonePressed} />;
};

export default SignupDoneContainer;
