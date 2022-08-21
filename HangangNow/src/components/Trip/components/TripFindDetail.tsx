import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { TripFindDetailTypes } from '@typedef/components/Trip/trip.types';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

type Props = {
  detail: TripFindDetailTypes;
};

const TripFindDetail = ({ detail }: Props) => {
  return (
    <ScrollView style={{ backgroundColor: colors.default.white }}>
      <CHeaderContainer title='나들이' />
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.main },
            ]}>
            {detail.name}
          </Text>
        </View>
        <View style={{ paddingLeft: 12, marginTop: 24 }}>
          <View
            style={{
              position: 'absolute',
              height: 40 * detail.course.length - 40,
              width: 4,
              backgroundColor: colors.main.secondary,
              top: 20,
              left: 20,
            }}></View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_10,
              { color: colors.main.primary, marginBottom: 4 },
            ]}>
            {'시작'}
          </Text>
          {detail.course.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: index !== detail.course.length - 1 ? 20 : 4,
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: colors.main.primary,
                  marginRight: 24,
                }}></View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  { color: colors.typo.black },
                ]}>
                {item}
              </Text>
            </View>
          ))}
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_10,
              { color: colors.main.primary, marginBottom: 4 },
            ]}>
            {'종료'}
          </Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_13,
              { color: '#949090' },
            ]}>{`•이동 경로 (약 ${detail.length}km)`}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TripFindDetail;
