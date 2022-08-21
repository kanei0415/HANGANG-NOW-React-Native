import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
import {
  TripFindCompanionType,
  TripFindplaceType,
  TripFindRequestBodyType,
  TripThemeType,
} from '@typedef/components/Trip/trip.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TripFind from '../components/TripFind';

const TripFindContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const [body, setBody] = useState<TripFindRequestBodyType>({
    companion: null,
    places: [],
    themes: [],
    x_pos: null,
    y_pos: null,
  });

  const btnActive = useMemo(() => {
    return body.companion !== null && body.x_pos != null;
  }, [body]);

  const onTripCompanionPressed = useCallback(
    (companion: TripFindCompanionType) => {
      setBody((prev) => ({ ...prev, companion }));
    },
    [],
  );

  const onTripThemePressed = useCallback((theme: TripThemeType) => {
    setBody((prev) => {
      const clone = [...prev.themes];

      if (clone.find((item) => item === theme)) {
        return {
          ...prev,
          themes: clone.filter((item) => item !== theme),
        };
      } else {
        return {
          ...prev,
          themes: [...clone, theme],
        };
      }
    });
  }, []);

  const onTripPlacePressed = useCallback((place: TripFindplaceType) => {
    setBody((prev) => {
      const clone = [...prev.places];

      if (clone.find((item) => item === place)) {
        return {
          ...prev,
          places: clone.filter((item) => item !== place),
        };
      } else {
        return {
          ...prev,
          places: [...clone, place],
        };
      }
    });
  }, []);

  const onFindPressed = useCallback(() => {
    navigation.navigate('tripFindResult', {
      body,
    });
  }, [navigation, body]);

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords }) => {
      setBody((prev) => ({
        ...prev,
        x_pos: coords.longitude,
        y_pos: coords.latitude,
      }));
    });
  }, []);

  return (
    <TripFind
      body={body}
      btnActive={btnActive}
      onFindPressed={onFindPressed}
      onTripCompanionPressed={onTripCompanionPressed}
      onTripPlacePressed={onTripPlacePressed}
      onTripThemePressed={onTripThemePressed}
    />
  );
};

export default TripFindContainer;
