import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import { EventType } from '@typedef/components/Home/home.types';
import { LeafletTypes } from '@typedef/components/Leaflet/leaflet.types';
import { ScrapTabTypes } from '@typedef/components/Scrap/scrap.types';
import { CourseType, PlaceType } from '@typedef/components/Trip/trip.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useState } from 'react';
import Scrap from '../Scrap';

const ScrapContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [tab, setTab] = useState<ScrapTabTypes>('place');

  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [leaflets, setLeaflets] = useState<LeafletTypes[]>([]);
  const [events, setEvents] = useState<EventType[]>([]);

  const [selectedLeaflet, setSelectedLeaflet] = useState<LeafletTypes | null>(
    null,
  );

  const loadPlace = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: PlaceType[] }>(
      apiRoute.scrap.loadPlace,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setPlaces(data.data);
    } else {
      alertMessage('장소 정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const loadCource = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: CourseType[] }>(
      apiRoute.scrap.loadCource,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setCourses(data.data);
    } else {
      alertMessage('코스 정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const loadLeaflet = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: LeafletTypes[] }>(
      apiRoute.scrap.loadLeaflet,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setLeaflets(data.data);
    } else {
      alertMessage('전단지 정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const loadEvents = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { data, config } = await requestSecureGet<{ data: EventType[] }>(
      apiRoute.scrap.loadEvent,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setEvents(data.data);
    } else {
      alertMessage('이벤트 정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const onLeafletPressed = useCallback((item: LeafletTypes) => {
    setSelectedLeaflet(item);
  }, []);

  const onEventPressed = useCallback(
    (id: number) => {
      navigation.navigate('eventDetail', {
        id,
      });
    },
    [navigation],
  );

  const onCoursePressed = useCallback(
    (item: CourseType) => {
      navigation.navigate('tripFindDetail', {
        id: item.id,
      });
    },
    [navigation],
  );

  useEffect(() => {
    if (tab === 'place') {
      loadPlace();
    }

    if (tab === 'course') {
      loadCource();
    }

    if (tab === 'leaflet') {
      loadLeaflet();
    }

    if (tab === 'event') {
      loadEvents();
    }
  }, [tab, loadPlace, loadCource, loadLeaflet, loadEvents]);

  return (
    <Scrap
      tab={tab}
      setTab={setTab}
      leaflets={leaflets}
      onLeafletPressed={onLeafletPressed}
      selectedLeaflet={selectedLeaflet}
      setSelectedLeaflet={setSelectedLeaflet}
      events={events}
      onEventPressed={onEventPressed}
      places={places}
      courses={courses}
      onCoursePressed={onCoursePressed}
    />
  );
};

export default ScrapContainer;
