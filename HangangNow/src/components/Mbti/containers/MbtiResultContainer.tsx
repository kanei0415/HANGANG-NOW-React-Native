import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  MainStackNavigationTypes,
  MainStackParamListTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BackHandler, Share } from 'react-native';
import MbtiResult from '../components/MbtiResult';
import dynamiclink from '@react-native-firebase/dynamic-links';
import { getMbtiLinkConfig } from '@libs/link';
import { useNavigation } from '@react-navigation/native';
import {
  MbtiTypes,
  MBTI_DATA_TABLE,
} from '@typedef/components/Mbti/mbti.types';

const MbtiResultCotainer = ({
  route: {
    params: { result },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'mbtiResult'>) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const mbtiResult = useMemo(
    () => MBTI_DATA_TABLE[result as MbtiTypes],
    [result],
  );

  const onSharePressed = useCallback(async () => {
    const link = await dynamiclink().buildShortLink(
      getMbtiLinkConfig('MBTI_RESULT_UID_FROM_RESULT'),
    );

    Share.share({
      message: link,
    });
  }, [result]);

  const onRetryPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <MbtiResult
      mbtiResult={mbtiResult}
      onSharePressed={onSharePressed}
      onRetryPressed={onRetryPressed}
    />
  );
};

export default MbtiResultCotainer;
