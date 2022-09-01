import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { apiRoute, requestSecureGet } from '@libs/api';
import Geolocation from '@react-native-community/geolocation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { updateCenterPosAction } from '@store/centerPos/actions';
import { updateFacilityDataAction } from '@store/facility/acitons';
import {
  FacilityCategoryType,
  FacilityDataType,
} from '@typedef/components/Facility/facility.types';
import { MainStackParamListTypes } from '@typedef/routes/navigation.types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NativeModules, Share } from 'react-native';
import WebView from 'react-native-webview';
import FacilityMap from '../components/FacilityMap';

const FacilityMapContainer = ({
  route: {
    params: { id, name },
  },
}: NativeStackScreenProps<MainStackParamListTypes, 'facilityMap'>) => {
  const { loginResponse } = useAuth();

  const [visible, setVisible] = useState(false);

  const [data, setData] = useState<FacilityDataType[]>([]);
  const [type, setType] = useState<FacilityCategoryType>('TOILET');

  const [selected, setSelected] = useState<FacilityDataType | null>(null);

  const webViewRef = useRef<WebView>(null);

  const loadData = useCallback(
    async (category: FacilityCategoryType) => {
      if (!loginResponse) {
        return;
      }

      const { data, config } = await requestSecureGet<{
        data: FacilityDataType[];
      }>(
        apiRoute.facility.loadFacility + id + `?category=${category}`,
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        setData(data.data);
      } else {
        alertMessage('정보를 불러오지 못했습니다');
      }
    },
    [loginResponse],
  );

  const onCategorySelectPressed = useCallback(() => {
    setVisible(true);
  }, []);

  const onCategoryPressed = useCallback((type: FacilityCategoryType) => {
    setType(type);
    loadData(type);
    setVisible(false);
  }, []);

  const onFindPathPressed = useCallback((item: FacilityDataType) => {
    console.log(NativeModules.KakaoModule);

    NativeModules.KakaoModule.openKakaoNavi(
      item.address,
      item.y_pos + '',
      item.x_pos + '',
    );
  }, []);

  const onSharePressed = useCallback((item: FacilityDataType) => {
    Share.share({
      title: item.name,
      message: item.address,
    });
  }, []);

  const onLoad = useCallback(() => {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      webViewRef?.current?.postMessage(
        JSON.stringify(
          updateCenterPosAction({ lat: latitude, lng: longitude }),
        ),
      );
    });
  }, []);

  useEffect(() => {
    loadData('TOILET');
  }, [loadData]);

  const onMessage = useCallback((item: FacilityDataType) => {
    setSelected(item);
  }, []);

  useEffect(() => {
    webViewRef?.current?.postMessage(
      JSON.stringify(updateFacilityDataAction(data)),
    );

    if (data.length > 0) {
      webViewRef?.current?.postMessage(
        JSON.stringify(
          updateCenterPosAction({ lat: data[0].y_pos, lng: data[0].x_pos }),
        ),
      );
    }
  }, [webViewRef, data]);

  return (
    <FacilityMap
      name={name}
      webViewRef={webViewRef}
      visible={visible}
      onCategorySelectPressed={onCategorySelectPressed}
      onCategoryPressed={onCategoryPressed}
      type={type}
      onMessage={onMessage}
      selected={selected}
      setSelected={setSelected}
      onFindPathPressed={onFindPathPressed}
      onSharePressed={onSharePressed}
      onLoad={onLoad}
    />
  );
};

export default FacilityMapContainer;
