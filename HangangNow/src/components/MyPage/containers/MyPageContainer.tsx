import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import MyPage from '../MyPage';

const MyPageContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onDiaryPressed = useCallback(
    () => navigation.navigate('diary'),
    [navigation],
  );

  const onMbtiPressed = useCallback(
    () => navigation.navigate('mbti'),
    [navigation],
  );

  return (
    <MyPage onDiaryPressed={onDiaryPressed} onMbtiPressed={onMbtiPressed} />
  );
};

export default MyPageContainer;
