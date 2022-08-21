import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width } = Dimensions.get('screen');

type Props = {
  onSharePressed: () => void;
  onRetryPressed: () => void;
};

const MbtiResult = ({ onSharePressed, onRetryPressed }: Props) => {
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
          {'내가 주인공이야~'}
        </Text>
        <Text
          style={[
            NotoSans.Bold,
            NotoSans.f_22,
            { color: colors.main.primary, marginTop: 12 },
          ]}>
          {'인플루언서 유형'}
        </Text>
        <View
          style={{
            marginTop: 20,
            width: 164,
            height: 164,
            backgroundColor: '#676767',
            borderRadius: 4,
          }}></View>
      </View>
      <View style={{ marginTop: 36, alignItems: 'center' }}>
        <Text style={[NotoSans.Bold, NotoSans.f_15]}>
          <Text style={{ color: colors.main.primary }}>
            {'순간을 기록하고 사진찍는 것'}
          </Text>
          <Text style={{ color: colors.typo.black }}>
            {'을 좋아하는 당신!'}
          </Text>
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 36,
          paddingVertical: 24,
          paddingHorizontal: 16,
          backgroundColor: colors.background.gray.light,
          borderRadius: 8,
        }}>
        {[
          '1. 내가 주인공이라 하고 싶은 것은 다 하고 살아야 해요.',
          '2. 어딜 가도 기왕이면 예쁜 곳으로 가길 원해요',
          '3. 단기 암기력이 높아 벼락치기를 꽤나 잘해요.',
          '4. 눈치는 많이 보지만, 눈치 없이 행동해요!',
        ].map((item, index) => (
          <View style={{ marginVertical: 8 }} key={index}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_14,
                { color: colors.typo.black },
              ]}>
              {item}
            </Text>
          </View>
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
            data={['', '', '']}
            renderItem={({ item }) => (
              <View style={{ alignItems: 'center', marginRight: 10 }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 4,
                    backgroundColor: colors.background.gray.light,
                  }}></View>
                <View style={{ marginTop: 12 }}>
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_16,
                      { color: colors.main.primary },
                    ]}>
                    {'선유도'}
                  </Text>
                </View>
                <View style={{ marginTop: 16 }}>
                  <Text
                    style={[
                      NotoSans.Regular,
                      NotoSans.f_13,
                      { textAlign: 'center' },
                    ]}>
                    {`도심 속 감성 피크닉을 
즐길 수 있는 곳`}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
        <View>
          <CButton type='secondary' label='한강 더 알아보기' />
        </View>
        <View style={{ marginTop: 12 }}>
          <CButton
            onPressed={onRetryPressed}
            type='secondary'
            label='테스트 다시하기'
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
          {'친구에게 내 결과 공유하기'}
        </Text>
      </TouchableOpacity>
      <View style={{ height: 80 }} />
    </KeyboardAwareScrollView>
  );
};

export default MbtiResult;
