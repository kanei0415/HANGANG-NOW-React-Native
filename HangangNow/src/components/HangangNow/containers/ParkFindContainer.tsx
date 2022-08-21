import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import { ParkingTypes } from '@typedef/components/HangangNow/hangangnow.types';
import React, { useCallback, useEffect, useState } from 'react';
import ParkFind from '../components/ParkFind';

const ParkFindContainer = () => {
  const { loginResponse } = useAuth();

  const [parkings, setParkings] = useState<ParkingTypes[]>([]);

  const [selectedParking, setSelectedParking] = useState<ParkingTypes | null>(
    null,
  );

  const loadParking = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: ParkingTypes[] }>(
      apiRoute.parking.loadParkings,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setParkings(data.data);
    } else {
      alertMessage('주차장 정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  useEffect(() => {
    loadParking();
  }, [loadParking]);

  return (
    <ParkFind
      parkings={parkings}
      selectedParking={selectedParking}
      setSelectedParking={setSelectedParking}
    />
  );
};

export default ParkFindContainer;
