import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import Facility from '../Facility';

const FacilityContainer = () => {
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

  return <Facility onHangangPressed={onHangangPressed} />;
};

export default FacilityContainer;
