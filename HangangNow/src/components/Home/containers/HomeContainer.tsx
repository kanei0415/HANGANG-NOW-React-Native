import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecureGet } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { EventType, ParkTypes } from '@typedef/components/Home/home.types';
import {
  MainStackNavigationTypes,
  MainTabNavigationTypes,
} from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import Home from '../Home';

const HomeContainer = () => {
  const navigation = useNavigation<
    MainStackNavigationTypes & MainTabNavigationTypes
  >();

  const { loginResponse } = useAuth();

  const [index, setIndex] = useState(0);

  const [events, setEvents] = useState<EventType[]>([]);

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

  const loadEvent = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: EventType[] }>(
      apiRoute.event.loadEvent,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setEvents(data.data);
    } else {
    }
  }, [loginResponse]);

  const onEventShowPressed = useCallback(() => {
    navigation.push('event');
  }, [navigation]);

  useEffect(() => {
    loadEvent();
  }, [loadEvent]);

  return (
    <Home
      onLeafetPressed={onLeafetPressed}
      onHangangDetailPressed={onHangangDetailPressed}
      events={events}
      index={index}
      setIndex={setIndex}
      maxSize={3}
      onEventShowPressed={onEventShowPressed}
    />
  );
};

export default HomeContainer;
