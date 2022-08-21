import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  onTripFindPressed: () => void;
};

const Trip = ({ onTripFindPressed }: Props) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: colors.default.white, padding: 20 }}>
      <View
        style={{
          height: 80,
          borderRadius: 4,
          borderWidth: 1.5,
          borderColor: '#3dc8e4',
          marginTop: 80,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_20,
            { color: colors.main.primary },
          ]}>
          {'한강에서 나들이하기'}
        </Text>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: colors.main.primary },
          ]}>
          {'당신의 취향을 담은 한강 큐레이팅'}
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_15,
            { color: colors.typo.black },
          ]}>
          {'방문 목적에 따라 한강 코스를 추천해드립니다!'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 32,
            justifyContent: 'space-evenly',
          }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#676767',
              }}></View>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                { color: colors.typo.black, marginTop: 8 },
              ]}>
              {'누구와'}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#676767',
              }}></View>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                { color: colors.typo.black, marginTop: 8 },
              ]}>
              {'무엇을'}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#676767',
              }}></View>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                { color: colors.typo.black, marginTop: 8 },
              ]}>
              {'어디에서'}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
      <CButton label='코스 추천 받으러 가기' onPressed={onTripFindPressed} />
      <View style={{ height: 32 }}></View>
    </View>
  );
};

export default Trip;
