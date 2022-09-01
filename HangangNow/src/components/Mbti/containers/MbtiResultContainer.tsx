import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  MainStackNavigationTypes,
  MainStackParamListTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback, useMemo } from 'react';
import { Share } from 'react-native';
import MbtiResult from '../components/MbtiResult';
import dynamiclink from '@react-native-firebase/dynamic-links';
import { getMbtiLinkConfig } from '@libs/link';
import { useNavigation } from '@react-navigation/native';
import {
  MbtiTypes,
  MBTI_DATA_TABLE,
} from '@typedef/components/Mbti/mbti.types';
import { ParkTypes } from '@typedef/components/Home/home.types';

const MbtiResultCotainer = ({
  route: {
    params: { result, type },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'mbtiResult'>) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const mbtiResult = useMemo(
    () => MBTI_DATA_TABLE[result as MbtiTypes],
    [result],
  );

  const onSharePressed = useCallback(async () => {
    const link = await dynamiclink().buildShortLink(getMbtiLinkConfig(result));

    Share.share({
      message: link,
    });
  }, [result]);

  const onRetryPressed = useCallback(() => {
    if (type === 'result') {
      navigation.goBack();
    } else {
      navigation.reset({
        routes: [{ name: 'mainTab' }, { name: 'mbtiInspect' }],
      });
    }
  }, [navigation, type]);

  const onParkPressed = useCallback(
    (park: ParkTypes) => {
      navigation.navigate('hangangDetail', {
        park,
      });
    },
    [navigation],
  );

  return (
    <MbtiResult
      mbtiResult={mbtiResult}
      onSharePressed={onSharePressed}
      onRetryPressed={onRetryPressed}
      onParkPressed={onParkPressed}
      type={type}
    />
  );
};

export default MbtiResultCotainer;
