import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecureGet } from '@libs/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ParkContentType,
  ParkTypes,
  PARK_DATA_TABLE,
  PARK_TABLE,
} from '@typedef/components/Home/home.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import HangangDetail from '../HangangDetail';

const HangangDetailContainer = ({
  route: {
    params: { park },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'hangangDetail'>) => {
  const { loginResponse } = useAuth();

  const [visible, setVisible] = useState(false);

  const [contents, setContents] = useState<ParkContentType | null>(null);

  const loadData = useCallback(() => {
    if (!loginResponse) {
      return;
    }

    requestSecureGet<ParkContentType>(
      apiRoute.parks.loadDetail + PARK_TABLE[park as ParkTypes],
      {},
      loginResponse.accessToken,
    ).then(({ data, config }) => {
      if (config.status === 200) {
        setContents(data);
      }
    });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <HangangDetail
      data={PARK_DATA_TABLE[PARK_TABLE[park as ParkTypes]]}
      visible={visible}
      setVisible={setVisible}
      contents={contents}
    />
  );
};

export default HangangDetailContainer;
