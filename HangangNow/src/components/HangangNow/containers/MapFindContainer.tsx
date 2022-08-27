import useAuth from '@hooks/store/useAuth';
import Geolocation from '@react-native-community/geolocation';
import { updateCenterPosAction } from '@store/centerPos/actions';
import { updateToken } from '@store/token/actions';
import React, { useCallback, useRef } from 'react';
import WebView from 'react-native-webview';
import MapFind from '../components/MapFind';

const MapFindContainer = () => {
  const { loginResponse } = useAuth();

  const webviewRef = useRef<WebView>(null);

  const onLoadEnd = useCallback(() => {
    if (loginResponse) {
      webviewRef?.current?.postMessage(
        JSON.stringify(
          updateToken(loginResponse.accessToken, loginResponse.refreshToken),
        ),
      );
    }

    Geolocation.getCurrentPosition(({ coords }) => {
      webviewRef?.current?.postMessage(
        JSON.stringify(
          updateCenterPosAction({
            lat: coords.latitude,
            lng: coords.longitude,
          }),
        ),
      );
    });
  }, [loginResponse, webviewRef]);

  return <MapFind webviewRef={webviewRef} onLoadEnd={onLoadEnd} />;
};

export default MapFindContainer;
