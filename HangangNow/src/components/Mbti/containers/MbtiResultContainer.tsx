import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MbtiResultTypes } from '@typedef/components/Mbti/mbti.types';
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

const dummyMbtiResult: MbtiResultTypes = {};

const MbtiResultCotainer = ({
  route: {
    params: { prevUid, result },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'mbtiResult'>) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [mbtiResult, setMbtiResult] = useState<MbtiResultTypes | null>(result);

  const loadResult = useCallback(() => {
    if (prevUid) {
      setMbtiResult(dummyMbtiResult);
    }
  }, [prevUid]);

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

  useEffect(() => {
    loadResult();
  }, [loadResult]);

  return (
    <MbtiResult
      onSharePressed={onSharePressed}
      onRetryPressed={onRetryPressed}
    />
  );
};

export default MbtiResultCotainer;
