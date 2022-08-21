import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import {
  TripFindCompanionType,
  TripFindplaceType,
  TripFindRequestBodyType,
  TripThemeType,
  TRIP_COMPANION_OPTIONS,
  TRIP_PLACE_OPTIONS,
  TRIP_THEME_OPTIONS,
} from '@typedef/components/Trip/trip.types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('screen');

type Props = {
  body: TripFindRequestBodyType;
  btnActive: boolean;
  onTripCompanionPressed: (companion: TripFindCompanionType) => void;
  onTripThemePressed: (theme: TripThemeType) => void;
  onTripPlacePressed: (place: TripFindplaceType) => void;
  onFindPressed: () => void;
};

const TripFind = ({
  body,
  btnActive,
  onTripPlacePressed,
  onFindPressed,
  onTripCompanionPressed,
  onTripThemePressed,
}: Props) => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title='나들이' />
      <View style={{ padding: 20 }}>
        <Text
          style={[NotoSans.Medium, NotoSans.f_17, { color: colors.typo.main }]}>
          {'코스 추천'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black, marginTop: 32 },
          ]}>
          {'1. 누구와 - 동반객 유형'}
        </Text>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {TRIP_COMPANION_OPTIONS.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onTripCompanionPressed(item)}
              style={{ alignItems: 'center' }}>
              <View
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 4,
                  backgroundColor:
                    body.companion === item ? '#3dc8e4' : '#dbdbdb',
                }}></View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  {
                    color: body.companion === item ? '#3dc8e4' : '#949090',
                    marginTop: 8,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#dbdbdb',
            marginVertical: 20,
          }}></View>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black },
          ]}>
          {'2. 무엇을 - 선호 활동'}
        </Text>
        <View>
          <FlatList
            numColumns={3}
            scrollEnabled={false}
            data={TRIP_THEME_OPTIONS}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onTripThemePressed(item)}
                style={{
                  width: (width - 64) / 3,
                  height: 32,
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: body.themes.find((i) => i === item)
                    ? '#3dc8e4'
                    : '#dbdbdb',
                  borderRadius: 4,
                  marginTop: 12,
                }}>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_13,
                    { color: colors.default.white },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#dbdbdb',
            marginVertical: 20,
          }}></View>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black },
          ]}>
          {'3. 어디에서 - 인근 지역'}
        </Text>
        <View>
          <FlatList
            numColumns={3}
            scrollEnabled={false}
            data={TRIP_PLACE_OPTIONS}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onTripPlacePressed(item)}
                style={{
                  width: (width - 64) / 3,
                  height: 32,
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: body.places.find((i) => i === item)
                    ? '#3dc8e4'
                    : '#dbdbdb',
                  borderRadius: 4,
                  marginTop: 12,
                }}>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_13,
                    { color: colors.default.white },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ height: 32 }}></View>
        <CButton
          label='코스 검색'
          disabled={!btnActive}
          onPressed={onFindPressed}
        />
      </View>
    </ScrollView>
  );
};

export default TripFind;
