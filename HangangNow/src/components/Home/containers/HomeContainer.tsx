import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import Home from '../Home';

const HomeContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onDiaryPressed = useCallback(
    () => navigation.navigate('diary'),
    [navigation],
  );

  const onMbtiPressed = useCallback(
    () => navigation.navigate('mbti'),
    [navigation],
  );

  return <Home onDiaryPressed={onDiaryPressed} onMbtiPressed={onMbtiPressed} />;
};

export default HomeContainer;
