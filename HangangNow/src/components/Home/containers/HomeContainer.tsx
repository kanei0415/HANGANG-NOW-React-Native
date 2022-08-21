import { useNavigation } from '@react-navigation/native';
import { ParkTypes } from '@typedef/components/Home/home.types';
import {
  MainStackNavigationTypes,
  MainTabNavigationTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback, useState } from 'react';
import Home from '../Home';

const HomeContainer = () => {
  const navigation = useNavigation<
    MainStackNavigationTypes & MainTabNavigationTypes
  >();

  const [index, setIndex] = useState(0);

  const onLeafetPressed = useCallback(() => {
    navigation.push('leaflet');
  }, [navigation]);

  const onHangangDetailPressed = useCallback(
    (item: ParkTypes) => {
      navigation.push('hangangDetail', {
        park: item,
      });
    },
    [navigation],
  );

  return (
    <Home
      onLeafetPressed={onLeafetPressed}
      onHangangDetailPressed={onHangangDetailPressed}
      index={index}
      setIndex={setIndex}
      maxSize={3}
    />
  );
};

export default HomeContainer;
