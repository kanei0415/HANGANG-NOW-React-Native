import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecureGet } from '@libs/api';
import { updateCenterPosAction } from '@store/centerPos/actions';
import { updateParking } from '@store/parking/actions';
import { updateToken } from '@store/token/actions';
import { ParkingMarkerTypes } from '@typedef/components/HangangNow/hangangnow.types';
import React, { useCallback, useRef } from 'react';
import WebView from 'react-native-webview';
import MapFind from '../components/MapFind';

const MapFindContainer = () => {
  const { loginResponse } = useAuth();

  const webviewRef = useRef<WebView>(null);

  const loadMarker = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const { config, data } = await requestSecureGet<{
      data: ParkingMarkerTypes[];
    }>(apiRoute.parking.loadParkingMaps, {}, loginResponse.accessToken);

    if (config.status === 200) {
      return data.data;
    } else {
      return null;
    }
  }, [loginResponse]);

  const onLoadEnd = useCallback(async () => {
    if (loginResponse) {
      webviewRef?.current?.postMessage(
        JSON.stringify(
          updateToken(loginResponse.accessToken, loginResponse.refreshToken),
        ),
      );

      const data = await loadMarker();

      if (data) {
        webviewRef?.current?.postMessage(JSON.stringify(updateParking(data)));
        webviewRef?.current?.postMessage(
          JSON.stringify(
            updateCenterPosAction({
              lat: data[0].local.y_pos,
              lng: data[0].local.x_pos,
            }),
          ),
        );
      }
    }
  }, [loginResponse, webviewRef]);

  return <MapFind webviewRef={webviewRef} onLoadEnd={onLoadEnd} />;
};

export default MapFindContainer;
