import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { WEB_VIEW_ORIGIN } from '@libs/webview';
import { FacilityDataType } from '@store/facility/acitons';
import {
  FacilityCategoryType,
  FACILITY_TABLE,
} from '@typedef/components/Facility/facility.types';
import React, { RefObject } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import WebView from 'react-native-webview';

type Props = {
  name: string;
  webViewRef: RefObject<WebView>;
  onCategoryPressed: (type: FacilityCategoryType) => void;
  onCategorySelectPressed: () => void;
  type: FacilityCategoryType;
  visible: boolean;
  onMessage: (item: FacilityDataType) => void;
  selected: FacilityDataType | null;
  setSelected: React.Dispatch<React.SetStateAction<FacilityDataType | null>>;
  onFindPathPressed: (item: FacilityDataType) => void;
  onSharePressed: (item: FacilityDataType) => void;
};

const { width } = Dimensions.get('screen');

const FacilityMap = ({
  name,
  webViewRef,
  onCategoryPressed,
  onCategorySelectPressed,
  type,
  visible,
  onMessage,
  selected,
  setSelected,
  onFindPathPressed,
  onSharePressed,
}: Props) => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.default.white }}>
        <CHeaderContainer title={name} />
        <WebView
          onMessage={(e) =>
            onMessage(JSON.parse(e.nativeEvent.data) as FacilityDataType)
          }
          ref={webViewRef}
          source={{ uri: WEB_VIEW_ORIGIN + '/facility' }}
        />
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: colors.default.white,
            elevation: 3,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 24,
            right: 24,
          }}
          onPress={onCategorySelectPressed}>
          <Image source={FACILITY_TABLE[type].image} />
        </TouchableOpacity>
      </View>
      <ReactNativeModal
        isVisible={visible}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            paddingLeft: 20,
            paddingVertical: 20,
            width: width - 40,
            backgroundColor: colors.default.white,
            borderRadius: 4,
          }}>
          <FlatList
            numColumns={4}
            data={Object.keys(FACILITY_TABLE)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onCategoryPressed(item as FacilityCategoryType)}
                style={{
                  marginRight: 20,
                  width: (width - 140) / 4,
                  marginBottom: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: (width - 140) / 4,
                    height: (width - 140) / 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    backgroundColor: '#dbdbdb',
                  }}>
                  <Image source={FACILITY_TABLE[item].image} />
                </View>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_13,
                    { color: colors.typo.gray.middle, marginTop: 12 },
                  ]}>
                  {FACILITY_TABLE[item].label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ReactNativeModal>
      <ReactNativeModal
        onBackdropPress={() => setSelected(null)}
        isVisible={selected !== null}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 20,
            width: width - 40,
            backgroundColor: colors.default.white,
            borderRadius: 4,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black },
            ]}>
            {selected?.name}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.typo.gray.middle, marginTop: 8 },
            ]}>
            {selected?.address}
          </Text>
          <View style={{ marginTop: 12, flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 20 }}>
              <CButton
                label='길찾기'
                type='secondary'
                onPressed={() => onFindPathPressed(selected!)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CButton
                label='공유하기'
                type='secondary'
                onPressed={() => onSharePressed(selected!)}
              />
            </View>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default FacilityMap;
