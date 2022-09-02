import useAuth from '@hooks/store/useAuth';
import { apiRoute, requestSecureGet } from '@libs/api';
import { updateCenterPosAction } from '@store/centerPos/actions';
import { updateParking } from '@store/parking/actions';
import { updateToken } from '@store/token/actions';
import {
  ParkingMarkerTypes,
  ParkingStateType,
  ParkingTypes,
} from '@typedef/components/HangangNow/hangangnow.types';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import WebView from 'react-native-webview';
import MapFind from '../components/MapFind';

const MapFindContainer = () => {
  const { loginResponse } = useAuth();

  const [selected, setSelected] = useState<ParkingTypes | null>(null);

  const state = useMemo<ParkingStateType>(() => {
    if (!selected) {
      return 'empty';
    }

    if (selected.total_count / selected.available_count < 10) {
      return 'full';
    }

    if (selected.total_count / selected.available_count < 40) {
      return 'normal';
    }

    return 'empty';
  }, [selected]);

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

  const onMessage = useCallback(
    async (item: ParkingMarkerTypes) => {
      if (!loginResponse) {
        return;
      }

      const { data, config } = await requestSecureGet<ParkingTypes>(
        apiRoute.parking.loadParkingDetails + item.id,
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        setSelected(data);
      }
    },
    [loginResponse],
  );

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
              lat: 37.5107813,
              lng: 126.9866362,
            }),
          ),
        );
      }
    }
  }, [loginResponse, webviewRef]);

  return (
    <MapFind
      webviewRef={webviewRef}
      onLoadEnd={onLoadEnd}
      onMessage={onMessage}
      selected={selected}
      setSelected={setSelected}
      state={state}
    />
  );
};

export default MapFindContainer;
