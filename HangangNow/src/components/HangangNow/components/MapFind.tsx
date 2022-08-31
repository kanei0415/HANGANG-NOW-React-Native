import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { WEB_VIEW_ORIGIN } from '@libs/webview';
import {
  ParkingMarkerTypes,
  ParkingTypes,
} from '@typedef/components/HangangNow/hangangnow.types';
import React, { RefObject } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import WebView from 'react-native-webview';

const { width } = Dimensions.get('screen');

type Props = {
  webviewRef: RefObject<WebView>;
  onLoadEnd: () => void;
  onMessage: (item: ParkingMarkerTypes) => void;
  selected: ParkingTypes | null;
  setSelected: React.Dispatch<React.SetStateAction<ParkingTypes | null>>;
};

const MapFind = ({
  webviewRef,
  onLoadEnd,
  onMessage,
  selected,
  setSelected,
}: Props) => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.default.white }}>
        <CHeaderContainer title='한강나우' />
        <View style={{ flex: 1, padding: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>{`지도를 통해 주차장 정보를
한눈에 확인하세요!`}</Text>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_15,
              { color: colors.typo.black, marginTop: 32 },
            ]}>
            {'핀을 눌러 세부 정보를 확인하세요.'}
          </Text>
          <View style={{ marginTop: 20, flex: 1 }}>
            <WebView
              onMessage={(e) =>
                onMessage(JSON.parse(e.nativeEvent.data) as ParkingMarkerTypes)
              }
              onLoadEnd={onLoadEnd}
              ref={webviewRef}
              style={{ borderRadius: 4 }}
              containerStyle={{ borderRadius: 4 }}
              source={{
                uri: WEB_VIEW_ORIGIN + '/hangangnow',
              }}
            />
          </View>
        </View>
      </View>
      <ReactNativeModal
        isVisible={selected !== null}
        onBackButtonPress={() => setSelected(null)}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 40,
            borderRadius: 4,
            backgroundColor: '#ffffff',
            padding: 20,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_17,
                { color: colors.typo.black },
              ]}>
              {selected?.name}
            </Text>
          </View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_15,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'주소'}
          </Text>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_13,
              { color: '#949090', marginTop: 8 },
            ]}>
            {`${selected?.address.sido} ${selected?.address.gu} ${selected?.address.detail}`}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_15,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'주차요금'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`기본 요금`}
            </Text>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`${selected?.basicCharge || 0} 원`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`시간당 요금`}
            </Text>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`${selected?.intervalCharge || 0} 원`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`1일 주차 최고한도`}
            </Text>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`${selected?.fulldayCharge || 0} 원`}
            </Text>
          </View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_15,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'주차장 현황'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`주차 가능 대수`}
            </Text>
            <Text
              style={[NotoSans.Regular, NotoSans.f_13, { color: '#949090' }]}>
              {`${selected?.available_count || 0} / ${
                selected?.total_count
              } 대`}
            </Text>
          </View>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_12,
              { color: '#a4a4a3', marginTop: 12 },
            ]}>
            {'출처: 한강공원 통합주차포털'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(null);
            }}
            style={{ position: 'absolute', top: 16, right: 16 }}>
            <Image source={images.components.common.close} />
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default MapFind;
