import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecurePost } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  CourseType,
  PlaceType,
  TripFindResultTypes,
} from '@typedef/components/Trip/trip.types';
import {
  MainStackNavigationTypes,
  MainStackParamListTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import TripFindResult from '../components/TripFindResult';

const TripFindResultContainer = ({
  route: {
    params: { body },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'tripFindResult'>) => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [result, setResult] = useState<TripFindResultTypes | null>(null);

  const [placeLiked, setPlaceLiked] = useState<boolean[]>([]);
  const [courseLiked, setCourseLiked] = useState<boolean[]>([]);

  const loadResult = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecurePost<TripFindResultTypes>(
      apiRoute.picnic.loadFindResult,
      {},
      body,
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setResult(data);

      setCourseLiked(new Array(data.courses.length).map(() => false));
      setPlaceLiked(new Array(data.places.length).map(() => false));
    }
  }, [body, loginResponse]);

  const onItemPressed = useCallback(
    (id: number) => {
      navigation.push('tripFindDetail', {
        id,
      });
    },
    [navigation],
  );

  const onPlaceLikePressed = useCallback(
    async (item: PlaceType, index: number) => {
      if (!loginResponse) {
        return;
      }

      const { config } = await requestSecurePost(
        apiRoute.scrap.addPlace + item.id,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        setPlaceLiked((prev) => {
          const clone = [...prev];

          clone[index] = true;

          return clone;
        });

        alertMessage('스크랩 되었습니다');
      } else {
        alertMessage('스크랩에 실패했습니다');
      }
    },
    [loginResponse],
  );

  const onCourseLikePressed = useCallback(
    async (item: CourseType, index: number) => {
      if (!loginResponse) {
        return;
      }

      const { config } = await requestSecurePost(
        apiRoute.scrap.addCource + item.id,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        setCourseLiked((prev) => {
          const clone = [...prev];

          clone[index] = true;

          return clone;
        });

        alertMessage('스크랩 되었습니다');
      } else {
        alertMessage('스크랩에 실패했습니다');
      }
    },
    [loginResponse],
  );

  useEffect(() => {
    loadResult();
  }, [loadResult]);

  return result ? (
    <TripFindResult
      result={result}
      onItemPressed={onItemPressed}
      placeLiked={placeLiked}
      courseLiked={courseLiked}
      onPlaceLikePressed={onPlaceLikePressed}
      onCourseLikePressed={onCourseLikePressed}
    />
  ) : null;
};

export default TripFindResultContainer;
