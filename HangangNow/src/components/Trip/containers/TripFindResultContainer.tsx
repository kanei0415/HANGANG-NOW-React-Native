import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecurePost } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TripFindResultTypes } from '@typedef/components/Trip/trip.types';
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

  useEffect(() => {
    loadResult();
  }, [loadResult]);

  return result ? (
    <TripFindResult result={result} onItemPressed={onItemPressed} />
  ) : null;
};

export default TripFindResultContainer;
