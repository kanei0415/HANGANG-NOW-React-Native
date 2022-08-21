import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { updateCenterPosAction } from '@store/centerPos/actions';
import { EventType } from '@typedef/components/Home/home.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import WebView from 'react-native-webview';
import EventDetail from '../components/EventDetail';

const EventDetailContainer = ({
  route: {
    params: { id },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'eventDetail'>) => {
  const { loginResponse } = useAuth();

  const [event, setEvent] = useState<EventType | null>(null);

  const mapRef = useRef<WebView>(null);

  const loadDetail = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<EventType>(
      apiRoute.event.loadEventDetail + id,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setEvent(data);
    } else {
      alertMessage('상세정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  useEffect(() => {
    loadDetail();
  }, [loadDetail]);

  useEffect(() => {
    setTimeout(() => {
      if (event) {
        mapRef.current?.postMessage(
          JSON.stringify(
            updateCenterPosAction({
              lat: event.y_pos,
              lng: event.x_pos,
            }),
          ),
        );
      }
    }, 500);
  }, [mapRef, event]);

  return event ? <EventDetail event={event} mapRef={mapRef} /> : null;
};

export default EventDetailContainer;
