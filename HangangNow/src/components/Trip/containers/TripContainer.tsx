import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback } from 'react';
import Trip from '../Trip';

const TripContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const onTripFindPressed = useCallback(() => {
    navigation.push('tripFind');
  }, [navigation]);

  return <Trip onTripFindPressed={onTripFindPressed} />;
};

export default TripContainer;
