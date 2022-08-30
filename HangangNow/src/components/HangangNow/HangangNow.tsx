import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { HangangNowDataTypes } from '@typedef/components/HangangNow/hangangnow.types';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const { width } = Dimensions.get('screen');

type Props = {
  hangangnowData: HangangNowDataTypes;
  labelImage: [string, ImageSourcePropType];
  moodInfoVisible: boolean;
  setMoodInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onMapFindPressed: () => void;
  onParkFindPressed: () => void;
};

const HangangNow = ({
  hangangnowData,
  labelImage,
  moodInfoVisible,
  setMoodInfoVisible,
  onMapFindPressed,
  onParkFindPressed,
}: Props) => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.default.white }}>
        <CHeaderContainer title='한강나우' showBackPress={false} />
        <View style={{ height: 180 }}>
          <View
            style={{
              marginTop: 12,
              marginHorizontal: 20,
              height: 32,
              borderRadius: 8,
              backgroundColor: colors.main.secondary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_16,
                { color: colors.typo.main },
              ]}>
              {labelImage[0]}
            </Text>
          </View>
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderLeftWidth: 6,
              borderRightWidth: 6,
              borderBottomWidth: 12,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: colors.main.secondary,
              rotation: 180,
              position: 'absolute',
              left: 42,
              top: 42,
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
              }}>
              <Image source={labelImage[1]} />
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {'날씨'}
              </Text>
              <View
                style={{
                  width: 68,
                  height: 68,
                  marginTop: 8,
                  borderRadius: 4,
                  backgroundColor: colors.background.gray.light,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                  }}>
                  {hangangnowData.weather.skyMode === 1 && (
                    <Image source={images.components.Diary.weather1} />
                  )}
                  {hangangnowData.weather.skyMode === 2 && (
                    <Image source={images.components.Diary.weather2} />
                  )}
                  {hangangnowData.weather.skyMode === 3 && (
                    <Image source={images.components.Diary.weather3} />
                  )}
                  {hangangnowData.weather.skyMode === 4 && (
                    <Image source={images.components.Diary.weather4} />
                  )}
                  {hangangnowData.weather.skyMode === 5 && (
                    <Image source={images.components.Diary.weather4} />
                  )}
                  {hangangnowData.weather.skyMode === 6 && (
                    <Image source={images.components.Diary.weather5} />
                  )}
                  {hangangnowData.weather.skyMode === 7 && (
                    <Image source={images.components.Diary.weather5} />
                  )}
                  {hangangnowData.weather.skyMode === 8 && (
                    <Image source={images.components.Diary.weather5} />
                  )}
                </View>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_14,
                    { color: colors.typo.black },
                  ]}>
                  {`${hangangnowData.temperature}℃`}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {'미세먼지'}
              </Text>
              <View
                style={{
                  width: 68,
                  height: 68,
                  marginTop: 8,
                  borderRadius: 4,
                  backgroundColor: colors.background.gray.light,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                {hangangnowData.dust.badderDustGrade === 1 && (
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_16,
                      { color: '#0272d4' },
                    ]}>
                    {'좋음'}
                  </Text>
                )}
                {hangangnowData.dust.badderDustGrade === 2 && (
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_16,
                      { color: colors.typo.black },
                    ]}>
                    {'보통'}
                  </Text>
                )}
                {hangangnowData.dust.badderDustGrade === 3 && (
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_16,
                      { color: '#f85757' },
                    ]}>
                    {'나쁨'}
                  </Text>
                )}
                {hangangnowData.dust.badderDustGrade === 4 && (
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_16,
                      { color: '#dc0000' },
                    ]}>
                    {'매우나쁨'}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black },
            ]}>
            {'오늘의 분위기'}
          </Text>
          <TouchableOpacity
            onPress={() => setMoodInfoVisible(true)}
            style={{
              padding: 16,
              borderRadius: 4,
              backgroundColor: '#f1f1f1',
              marginTop: 12,
            }}>
            <Text
              style={[
                NotoSans.Regular,
                NotoSans.f_13,
                { color: colors.typo.black },
              ]}>{`다채로운 하늘을 만끽하고 계신가요?
${Math.abs(
  parseInt(hangangnowData.sunMoonRiseSet.sunSet.split(':')[0]) -
    new Date().getHours(),
)}시간 후 일몰에서의 석양도 기대해주세요!`}</Text>
            <View
              style={{
                marginTop: 16,
                borderRadius: 4,
                backgroundColor: '#000000aa',
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  { color: colors.default.white },
                ]}>
                {'일출 / 일몰 / 월출 정보 보기'}
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black, marginTop: 20 },
            ]}>
            {'실시간 주차 정보'}
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 16 }}>
            <TouchableOpacity
              onPress={onMapFindPressed}
              style={{
                flex: 1,
                marginRight: 16,
                height: 100,
                borderRadius: 4,
                backgroundColor: '#f1f1f1',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                }}>
                <Image source={images.components.HangangNow.map} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  { color: colors.typo.black },
                ]}>
                {'지도로 찾기'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onParkFindPressed}
              style={{
                flex: 1,
                height: 100,
                borderRadius: 4,
                backgroundColor: '#f1f1f1',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                }}>
                <Image source={images.components.HangangNow.car} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  { color: colors.typo.black },
                ]}>
                {'공원별 주차장'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ReactNativeModal
        isVisible={moodInfoVisible}
        onBackdropPress={() => {
          setMoodInfoVisible(false);
        }}
        style={{
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 40,
            height: 156,
            borderRadius: 4,
            padding: 24,
            backgroundColor: colors.default.white,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black },
            ]}>
            {'오늘의 한강 MOOD'}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 30,
              marginBottom: 12,
            }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {'해뜨는 시간'}
              </Text>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  {
                    color: '#a4a4a3',
                    marginTop: 16,
                  },
                ]}>
                {hangangnowData.sunMoonRiseSet.sunRise}
              </Text>
            </View>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {'해지는 시간'}
              </Text>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  {
                    color: '#a4a4a3',
                    marginTop: 16,
                  },
                ]}>
                {hangangnowData.sunMoonRiseSet.sunSet}
              </Text>
            </View>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black },
                ]}>
                {'달뜨는 시간'}
              </Text>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_13,
                  {
                    color: '#a4a4a3',
                    marginTop: 16,
                  },
                ]}>
                {hangangnowData.sunMoonRiseSet.moonRise}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setMoodInfoVisible(false);
            }}
            style={{ position: 'absolute', top: 16, right: 16 }}>
            <Image source={images.components.common.close} />
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default HangangNow;
