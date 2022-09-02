import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet, requestSecurePost } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { EventType } from '@typedef/components/Home/home.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import Event from '../Event';

const EventContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [events, setEvents] = useState<EventType[]>([]);
  const [liked, setLiked] = useState<boolean[]>([]);

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
      setLiked(data.data.map((e) => e.isScrap));
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

  const onLikePressed = useCallback(
    async (item: EventType, index: number) => {
      if (!loginResponse) {
        return;
      }

      const { data, config } = await requestSecurePost(
        apiRoute.scrap.addEvent + item.id,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        setLiked((prev) => {
          alertMessage(
            prev[index] ? '스크랩해제 되었습니다' : '스크랩 되었습니다',
          );

          const clone = [...prev];

          clone[index] = !prev[index];

          return clone;
        });
      } else {
        alertMessage('스크랩에 실패했습니다');
      }
    },
    [loginResponse],
  );

  useEffect(() => {
    loadEvent();
  }, [loadEvent]);

  return (
    <Event
      events={events}
      onItemPressed={onItemPressed}
      liked={liked}
      onLikePressed={onLikePressed}
    />
  );
};

export default EventContainer;
