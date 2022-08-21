import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React from 'react';
import { useCallback } from 'react';
import Leaflet from '../Leaflet';

const LeafletContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onPartnersEnrollPressed = useCallback(() => {
    navigation.navigate('partnersEnroll');
  }, [navigation]);

  return <Leaflet onPartnersEnrollPressed={onPartnersEnrollPressed} />;
};

export default LeafletContainer;
