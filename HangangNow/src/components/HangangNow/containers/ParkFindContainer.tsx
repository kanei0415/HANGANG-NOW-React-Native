import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import {
  ParkingStateType,
  ParkingTypes,
} from '@typedef/components/HangangNow/hangangnow.types';
import { ParkTypes, PARK_TABLE } from '@typedef/components/Home/home.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ParkFind from '../components/ParkFind';

const ParkFindContainer = () => {
  const { loginResponse } = useAuth();

  const [parkings, setParkings] = useState<ParkingTypes[]>([]);

  const [selectedParking, setSelectedParking] = useState<ParkingTypes | null>(
    null,
  );

  const [visible, setVisible] = useState(false);

  const [selected, setSelected] = useState<ParkTypes | null>(null);

  const state = useMemo<ParkingStateType>(() => {
    if (!selectedParking) {
      return 'empty';
    }

    if (
      (selectedParking.available_count / selectedParking.total_count) * 100 >
      90
    ) {
      return 'empty';
    }

    if (
      (selectedParking.available_count / selectedParking.total_count) * 100 >
      40
    ) {
      return 'normal';
    }

    return 'full';
  }, [selectedParking]);

  const loadParking = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    if (selected) {
      const { data, config } = await requestSecureGet<{ data: ParkingTypes[] }>(
        apiRoute.parking.loadParkingWithPark + PARK_TABLE[selected],
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        setParkings(data.data);
      } else {
        alertMessage('주차장 정보를 불러오지 못했습니다');
      }
    } else {
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
    }
  }, [loginResponse, selected]);

  const onSelectPressed = useCallback(() => {
    setVisible(true);
  }, []);

  const onBackPressed = useCallback(() => {
    setVisible(false);
  }, []);

  const onItemPressed = useCallback((item: ParkTypes) => {
    setSelected(item);
    setVisible(false);
  }, []);

  useEffect(() => {
    loadParking();
  }, [loadParking]);

  return (
    <ParkFind
      parkings={parkings}
      selectedParking={selectedParking}
      setSelectedParking={setSelectedParking}
      selected={selected}
      visible={visible}
      onSelectPressed={onSelectPressed}
      onBackPressed={onBackPressed}
      onItemPressed={onItemPressed}
      state={state}
    />
  );
};

export default ParkFindContainer;
