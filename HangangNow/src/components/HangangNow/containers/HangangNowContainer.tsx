import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import { useNavigation } from '@react-navigation/native';
import {
  HangangNowDataTypes,
  skymodeToWeather,
  temperatureToTemperature,
  weatherTemperatureToLabelImage,
} from '@typedef/components/HangangNow/hangangnow.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HangangNow from '../HangangNow';

const HangangNowContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const [hangangnowData, setHangangnowData] =
    useState<HangangNowDataTypes | null>(null);

  const [moodInfoVisible, setMoodInfoVisible] = useState(false);

  const labelImage = useMemo(() => {
    if (hangangnowData) {
      return weatherTemperatureToLabelImage(
        skymodeToWeather(hangangnowData.weather.skyMode),
        temperatureToTemperature(hangangnowData.temperature),
      );
    } else {
      return null;
    }
  }, [hangangnowData]);

  const loadData = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { config, data } = await requestSecureGet<HangangNowDataTypes>(
      apiRoute.hangangNow.loadData,
      {},
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      setHangangnowData(data);
    } else {
      alertMessage('정보를 불러오지 못했습니다');
    }
  }, [loginResponse]);

  const onMapFindPressed = useCallback(() => {
    navigation.navigate('mapfind');
  }, [navigation]);

  const onParkFindPressed = useCallback(() => {
    navigation.navigate('parkfind');
  }, [navigation]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return hangangnowData && labelImage ? (
    <HangangNow
      hangangnowData={hangangnowData}
      labelImage={labelImage}
      moodInfoVisible={moodInfoVisible}
      setMoodInfoVisible={setMoodInfoVisible}
      onMapFindPressed={onMapFindPressed}
      onParkFindPressed={onParkFindPressed}
    />
  ) : null;
};

export default HangangNowContainer;
