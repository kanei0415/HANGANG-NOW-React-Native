import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import FindPW from '../FindPW';

const FindPWContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onDonePressed = useCallback(() => {
    navigation.navigate('findPWDone');
  }, [navigation]);

  return <FindPW onDonePressed={onDonePressed} />;
};

export default FindPWContainer;
