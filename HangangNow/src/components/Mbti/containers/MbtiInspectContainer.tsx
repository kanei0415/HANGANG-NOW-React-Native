import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecurePut } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { calcMbti } from '@typedef/components/Mbti/mbti.types';
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

  const [answer, setAnswer] = useState<(0 | 1)[]>(new Array(12).map((i) => 0));

  const { loginResponse } = useAuth();

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
    async (index: number, choice: 0 | 1) => {
      if (index >= 11) {
        BackHandler.removeEventListener('hardwareBackPress', backPressHandler);

        if (!loginResponse) {
          return;
        }

        const clone = [...answer];

        clone[11] = choice;

        const { config } = await requestSecurePut(
          apiRoute.member.setMbti + calcMbti(clone),
          {},
          {},
          loginResponse.accessToken,
        );

        if (config.status === 200) {
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
                  result: calcMbti(clone),
                },
              },
            ],
          });
        } else {
          alertMessage('유형검사 설정에 실패했습니다');
        }

        return;
      } else {
        setAnswer((prev) => {
          const clone = [...prev];

          clone[index] = choice;

          return clone;
        });
      }

      setIndex(index + 1);
    },
    [navigation, answer, backPressHandler],
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
