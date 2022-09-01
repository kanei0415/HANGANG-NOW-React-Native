import { parseMbtiLink } from '@libs/link';
import { useNavigation } from '@react-navigation/native';
import MainTabNavigation from '@routes/components/MainTabNavigation';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect } from 'react';
import dynamiclinks from '@react-native-firebase/dynamic-links';
import { Linking } from 'react-native';
import { MbtiTypes } from '@typedef/components/Mbti/mbti.types';

const MainTabNavigationContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const checkInitialLink = useCallback(async () => {
    const initialUrl =
      (await dynamiclinks()
        .getInitialLink()
        .then((dl) => dl?.url)) || (await Linking.getInitialURL());

    const mbti = parseMbtiLink(initialUrl);

    if (mbti) {
      navigation.navigate('mbtiResult', {
        result: mbti as MbtiTypes,
        type: 'shared',
      });
    }
  }, [navigation]);

  useEffect(() => {
    checkInitialLink();
  }, [checkInitialLink]);

  return <MainTabNavigation />;
};

export default MainTabNavigationContainer;
