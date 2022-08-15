import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import Geolocation from '@react-native-community/geolocation';
import { updateCenterPosAction } from '@store/centerPos/actions';
import { HangangNowDataTypes } from '@typedef/components/HangangNow/hangangnow.types';
import React, { useCallback, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import WebView from 'react-native-webview';
import HangangNow from '../HangangNow';

const HangangNowContainer = () => {
  const { loginResponse } = useAuth();

  const [hangangnowData, setHangangnowData] =
    useState<HangangNowDataTypes | null>(null);

  const [sunRizeVisible, setSunRizeVisible] = useState(false);

  const webViewRef = useRef<WebView>(null);

  const onCurrentPosPressed = useCallback(() => {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      webViewRef?.current?.postMessage(
        JSON.stringify(
          updateCenterPosAction({ lat: latitude, lng: longitude }),
        ),
      );
    });
  }, [webViewRef]);

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

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <HangangNow
      onCurrentPosPressed={onCurrentPosPressed}
      webViewRef={webViewRef}
      hangangnowData={hangangnowData}
      sunRizeVisible={sunRizeVisible}
      setSunRizeVisible={setSunRizeVisible}
    />
  );
};

export default HangangNowContainer;
