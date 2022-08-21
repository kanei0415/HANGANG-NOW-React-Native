import { parseMbtiLink } from '@libs/link';
import { useNavigation } from '@react-navigation/native';
import MainTabNavigation from '@routes/components/MainTabNavigation';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect } from 'react';
import dynamiclinks from '@react-native-firebase/dynamic-links';
import { Linking } from 'react-native';

const MainTabNavigationContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const checkInitialLink = useCallback(async () => {
    const initialUrl =
      (await dynamiclinks()
        .getInitialLink()
        .then((dl) => dl?.url)) || (await Linking.getInitialURL());

    const result = parseMbtiLink(initialUrl);

    if (result) {
      const { type, uid } = result;

      switch (type) {
        case 'result': {
          navigation.navigate('mbti');
          return;
        }

        case 'result': {
          navigation.navigate('mbtiResult', {
            prevUid: uid,
            result: null,
          });
          return;
        }

        default:
          return;
      }
    }
  }, [navigation]);

  useEffect(() => {
    checkInitialLink();
  }, [checkInitialLink]);

  return <MainTabNavigation />;
};

export default MainTabNavigationContainer;
