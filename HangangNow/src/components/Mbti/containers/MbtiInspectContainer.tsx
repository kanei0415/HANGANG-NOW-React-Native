import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useEffect, useMemo } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { BackHandler } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import MbtiInspect from '../components/MbtiInspect';

const MbtiInspectContaienr = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [index, setIndex] = useState(0);

  const backPressHandler = useMemo(() => {
    return () => {
      if (index === 0) {
        return false;
      } else {
        setIndex((prev) => prev - 1);
        return true;
      }
    };
  }, [index]);

  const scrollRef = useRef<SwiperFlatList>(null);

  const onAnswerSelected = useCallback(
    (index: number, choice: 0 | 1) => {
      if (index >= 9) {
        BackHandler.removeEventListener('hardwareBackPress', backPressHandler);

        navigation.reset({
          routes: [
            {
              name: 'mainTab',
            },
            {
              name: 'mbti',
            },
            {
              name: 'mbtiResult',
              params: {
                result: 'INFLUENCER',
              },
            },
          ],
        });

        return;
      }

      setIndex(index + 1);
    },
    [navigation, backPressHandler],
  );

  useEffect(() => {
    scrollRef.current?.scrollToIndex({ index: index });
  }, [scrollRef, index]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backPressHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPressHandler);
    };
  }, [backPressHandler]);

  return (
    <MbtiInspect
      index={index}
      scrollRef={scrollRef}
      onAnswerSelected={onAnswerSelected}
    />
  );
};

export default MbtiInspectContaienr;
