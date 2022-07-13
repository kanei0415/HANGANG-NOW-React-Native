import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import FindPWDone from '../components/FindPWDone';

const FindPWDoneContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onGoLoginPressed = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'login' }],
    });
  }, [navigation]);

  return <FindPWDone onGoLoginPressed={onGoLoginPressed} />;
};

export default FindPWDoneContainer;
