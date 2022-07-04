import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import FindID from '../FindID';

const FindIDContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onDonePressed = useCallback(
    () => navigation.navigate('findIDStep2'),
    [],
  );

  return <FindID onDonePressed={onDonePressed} />;
};

export default FindIDContainer;
