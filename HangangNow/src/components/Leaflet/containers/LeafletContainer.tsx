import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { LeafletTypes } from '@typedef/components/Leaflet/leaflet.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import Leaflet from '../Leaflet';
import { Linking } from 'react-native';

const LeafletContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [leaflets, setLeaflets] = useState<LeafletTypes[]>([]);

  const [selected, setSelected] = useState<LeafletTypes | null>(null);

  const loadLeaflet = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: LeafletTypes[] }>(
      apiRoute.flyer.loadFlyer,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setLeaflets(data.data);
    } else {
      alertMessage('전단지 정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const onPartnersEnrollPressed = useCallback(() => {
    navigation.navigate('partnersEnroll');
  }, [navigation]);

  const onItemPressed = useCallback((item: LeafletTypes) => {
    setSelected(item);
  }, []);

  const onBackPressed = useCallback(() => {
    setSelected(null);
  }, []);

  const onTelPressed = useCallback(() => {
    if (selected) {
      Linking.openURL(`tel:${selected.call}`);
    }
  }, [selected]);

  useEffect(() => {
    loadLeaflet();
  }, [loadLeaflet]);

  return (
    <Leaflet
      onPartnersEnrollPressed={onPartnersEnrollPressed}
      leaflets={leaflets}
      onItemPressed={onItemPressed}
      selected={selected}
      onBackPressed={onBackPressed}
      onTelPressed={onTelPressed}
    />
  );
};

export default LeafletContainer;
