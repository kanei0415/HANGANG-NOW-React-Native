import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TripFindDetailTypes } from '@typedef/components/Trip/trip.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import TripFindDetail from '../components/TripFindDetail';

const TripFindDetailContainer = ({
  route: {
    params: { id },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'tripFindDetail'>) => {
  const { loginResponse } = useAuth();

  const [detail, setDetail] = useState<TripFindDetailTypes | null>(null);

  const loadDetail = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<TripFindDetailTypes>(
      apiRoute.picnic.loadFindDetail + id,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setDetail(data);
    } else {
      alertMessage('상세보기를 불러오지 못했습니다');
    }
  }, [loginResponse, id]);

  useEffect(() => {
    loadDetail();
  }, [loadDetail]);

  return detail ? <TripFindDetail detail={detail} /> : null;
};

export default TripFindDetailContainer;
