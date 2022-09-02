import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import {
  ParkTypes,
  PARK_DATA_TABLE,
  PARK_TABLE,
} from '@typedef/components/Home/home.types';
import { MbtiDataTypes } from '@typedef/components/Mbti/mbti.types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width } = Dimensions.get('screen');

type Props = {
  mbtiResult: MbtiDataTypes;
  onSharePressed: () => void;
  onRetryPressed: () => void;
  onParkPressed: (park: ParkTypes) => void;
  type: 'result' | 'shared';
};

const MbtiResult = ({
  mbtiResult,
  onSharePressed,
  onRetryPressed,
  onParkPressed,
  type,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='나의 한강유형 찾기' />
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_17,
            { color: colors.typo.black },
          ]}>
          {mbtiResult.label}
        </Text>
        <Text
          style={[
            NotoSans.Bold,
            NotoSans.f_22,
            { color: colors.main.primary, marginTop: 12 },
          ]}>
          {mbtiResult.name}
        </Text>
        <View
          style={{
            marginTop: 20,
            width: 164,
            height: 164,
            borderRadius: 4,
          }}>
          <Image source={mbtiResult.image} />
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 60 }}>
        <Text
          style={[NotoSans.Bold, NotoSans.f_15, { color: colors.typo.black }]}>
          {mbtiResult.subLabel}
        </Text>
      </View>
      <View
        style={{
          width: width - 40,
          marginLeft: 20,
          marginTop: 24,
          paddingTop: 28,
          paddingHorizontal: 16,
          paddingBottom: 12,
          backgroundColor: '#f1f1f1',
          borderRadius: 4,
        }}>
        {mbtiResult.chars.map((c, i) => (
          <Text
            key={i}
            style={[
              NotoSans.Regular,
              NotoSans.f_15,
              { color: colors.typo.black, marginBottom: 16 },
            ]}>
            {c}
          </Text>
        ))}
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text style={[NotoSans.Bold, NotoSans.f_18]}>
          <Text style={{ color: colors.typo.black }}>
            {'당신에게 어울리는 '}
          </Text>
          <Text style={{ color: colors.main.primary }}>{'한강'}</Text>
          <Text style={{ color: colors.typo.black }}>{'은?'}</Text>
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={mbtiResult.parks}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onParkPressed(item)}
                style={{ alignItems: 'center', marginRight: 10 }}>
                <Image
                  source={PARK_DATA_TABLE[PARK_TABLE[item]].image}
                  style={{
                    width: (width - 60) / 3,
                    height: (width - 60) / 3,
                    borderRadius: 4,
                  }}
                />
                <View style={{ marginTop: 12 }}>
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_16,
                      { color: colors.main.primary },
                    ]}>
                    {PARK_DATA_TABLE[PARK_TABLE[item]].name.replace(
                      '한강공원',
                      '',
                    )}
                  </Text>
                </View>
                <View style={{ marginTop: 16 }}>
                  <Text
                    style={[
                      NotoSans.Regular,
                      NotoSans.f_12,
                      { textAlign: 'center', color: colors.typo.black },
                    ]}>
                    {PARK_DATA_TABLE[PARK_TABLE[item]].summury}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
        {false && (
          <View>
            <CButton type='secondary' label='한강 더 알아보기' />
          </View>
        )}
        <View style={{ marginTop: 12 }}>
          <CButton
            onPressed={onRetryPressed}
            type='secondary'
            label={type === 'result' ? '테스트 다시하기' : '테스트 하기'}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={onSharePressed}
        style={{ marginTop: 40, alignItems: 'center' }}>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_13,
            { color: colors.typo.gray.dark },
          ]}>
          {'공유하기'}
        </Text>
      </TouchableOpacity>
      <View style={{ height: 80 }} />
    </KeyboardAwareScrollView>
  );
};

export default MbtiResult;
