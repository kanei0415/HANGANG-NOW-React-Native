import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecureGet } from '@libs/api';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import Facility from '../Facility';

const FacilityContainer = () => {
  const { loginResponse } = useAuth();

  const navigation = useNavigation<MainStackNavigationTypes>();

  const onHangangPressed = useCallback(
    (id: number, name: string) => {
      navigation.push('facilityMap', {
        id,
        name,
      });
    },
    [navigation],
  );

  const onNearPressed = useCallback(() => {
    if (!loginResponse) {
      return;
    }

    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      requestSecureGet<{
        id: number;
        name: string;
        x_pos: number;
        y_pos: number;
      }>(
        apiRoute.parks.loadNear + `?x=${longitude}&y=${latitude}`,
        {},
        loginResponse.accessToken,
      ).then(({ data, config }) => {
        if (config.status === 200) {
          navigation.push('facilityMap', {
            id: data.id,
            name: data.name,
          });
        }
      });
    });
  }, []);

  return (
    <Facility
      onHangangPressed={onHangangPressed}
      onNearPressed={onNearPressed}
    />
  );
};

export default FacilityContainer;
