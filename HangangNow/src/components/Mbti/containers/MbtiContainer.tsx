import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React from 'react';
import { useCallback } from 'react';
import Mbti from '../Mbti';
import dynamiclink from '@react-native-firebase/dynamic-links';
import { getMbtiLinkConfig } from '@libs/link';
import { Share } from 'react-native';

const MbtiContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onBackPressed = useCallback(() => navigation.goBack(), [navigation]);

  const onTestPressed = useCallback(() => {
    navigation.navigate('mbtiInspect');
  }, [navigation]);

  const onSharePressed = useCallback(async () => {
    const link = await dynamiclink().buildShortLink(getMbtiLinkConfig());

    Share.share({
      message: link,
    });
  }, []);

  return (
    <Mbti
      onBackPressed={onBackPressed}
      onTestPressed={onTestPressed}
      onSharePressed={onSharePressed}
    />
  );
};

export default MbtiContainer;
