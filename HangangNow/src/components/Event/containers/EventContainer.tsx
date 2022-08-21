import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecureGet } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { EventType } from '@typedef/components/Home/home.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import Event from '../Event';

const EventContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [events, setEvents] = useState<EventType[]>([]);

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

  const onItemPressed = useCallback(
    (id: number) => {
      navigation.navigate('eventDetail', {
        id,
      });
    },
    [navigation],
  );

  useEffect(() => {
    loadEvent();
  }, [loadEvent]);

  return <Event events={events} onItemPressed={onItemPressed} />;
};

export default EventContainer;
