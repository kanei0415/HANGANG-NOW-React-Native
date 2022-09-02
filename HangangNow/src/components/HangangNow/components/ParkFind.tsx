import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import {
  ParkingStateType,
  ParkingTypes,
} from '@typedef/components/HangangNow/hangangnow.types';
import { ParkTypes, PARK_TABLE } from '@typedef/components/Home/home.types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const { width } = Dimensions.get('screen');

type Props = {
  parkings: ParkingTypes[];
  selectedParking: ParkingTypes | null;
  setSelectedParking: React.Dispatch<React.SetStateAction<ParkingTypes | null>>;
  selected: ParkTypes | null;
  visible: boolean;
  onSelectPressed: () => void;
  onBackPressed: () => void;
  onItemPressed: (item: ParkTypes) => void;
  state: ParkingStateType;
};

const ParkFind = ({
  parkings,
  selectedParking,
  setSelectedParking,
  selected,
  visible,
  onSelectPressed,
  onBackPressed,
  onItemPressed,
  state,
}: Props) => {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: colors.default.white,
        }}
        contentContainerStyle={{
          backgroundColor: colors.default.white,
        }}>
        <CHeaderContainer title='한강나우' />
        <View style={{ padding: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>{`한강공원별 주차장 정보를
한눈에 확인하세요!`}</Text>
          <TouchableOpacity
            onPress={onSelectPressed}
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.typo.black, marginRight: 16 },
              ]}>
              {selected || '한강별 보기'}
            </Text>
            <Image source={images.components.Leaflet.downArrow} />
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
              backgroundColor: '#f1f1f1',
              borderRadius: 4,
            }}>
            {parkings.map((item, index) => (
              <TouchableOpacity
                onPress={() => setSelectedParking(item)}
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#dbdbdb',
                }}
                key={index}>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_15,
                    { color: colors.typo.black },
                  ]}>
                  {item.name}
                </Text>
                <Text
                  style={[
                    NotoSans.Regular,
                    NotoSans.f_13,
                    { color: colors.typo.black, marginTop: 4 },
                  ]}>{`${item.address.sido} ${item.address.gu} ${item.address.detail}`}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <ReactNativeModal
        isVisible={selectedParking !== null}
        onBackButtonPress={() => setSelectedParking(null)}
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
              {selectedParking?.name}
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
            {`${selectedParking?.address.sido} ${selectedParking?.address.gu} ${selectedParking?.address.detail}`}
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
              {`${selectedParking?.basicCharge || 0} 원`}
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
              {`${selectedParking?.intervalCharge || 0} 원`}
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
              {`${selectedParking?.fulldayCharge || 0} 원`}
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
              {`${selectedParking?.available_count || 0} / ${
                selectedParking?.total_count
              } 대`}
            </Text>
          </View>
          {state === 'empty' && (
            <View style={{ marginTop: 8, flexDirection: 'row' }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  marginRight: 12,
                  backgroundColor: '#06B500',
                }}></View>
              <Text
                style={[NotoSans.Medium, NotoSans.f_15, { color: '#06B500' }]}>
                {'여유'}
              </Text>
            </View>
          )}
          {state === 'normal' && (
            <View style={{ marginTop: 8, flexDirection: 'row' }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  marginRight: 12,
                  backgroundColor: '#FFDD00',
                }}></View>
              <Text
                style={[NotoSans.Medium, NotoSans.f_15, { color: '#FFDD00' }]}>
                {'보통'}
              </Text>
            </View>
          )}
          {state === 'full' && (
            <View style={{ marginTop: 8, flexDirection: 'row' }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  marginRight: 12,
                  backgroundColor: '#FC5C5C',
                }}></View>
              <Text
                style={[NotoSans.Medium, NotoSans.f_15, { color: '#FC5C5C' }]}>
                {'혼잡'}
              </Text>
            </View>
          )}
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
              setSelectedParking(null);
            }}
            style={{ position: 'absolute', top: 16, right: 16 }}>
            <Image source={images.components.common.close} />
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
      <ReactNativeModal
        onBackdropPress={onBackPressed}
        isVisible={visible}
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
            paddingBottom: 20,
            paddingLeft: 20,
          }}>
          <FlatList
            numColumns={3}
            data={Object.keys(PARK_TABLE)}
            renderItem={({ item }) => (
              <View
                style={{
                  width: (width - 120) / 3,
                  marginRight: 20,
                  marginTop: 20,
                }}>
                <CButton
                  type='secondary'
                  label={item.replace('한강공원', '')}
                  onPressed={() => onItemPressed(item as ParkTypes)}
                />
              </View>
            )}
          />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default ParkFind;
