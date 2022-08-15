import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { WEB_VIEW_ORIGIN } from '@libs/webview';
import { HangangNowDataTypes } from '@typedef/components/HangangNow/hangangnow.types';
import React, { RefObject } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';

type Props = {
  onCurrentPosPressed: () => void;
  webViewRef: RefObject<WebView>;
  hangangnowData: HangangNowDataTypes | null;
  sunRizeVisible: boolean;
  setSunRizeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const HangangNow = ({
  onCurrentPosPressed,
  setSunRizeVisible,
  webViewRef,
  hangangnowData,
  sunRizeVisible,
}: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='한강나우' showBackPress={false} />
      {hangangnowData && (
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
              {'선크림은 챙기셨나요? 한강의 그늘을 사수하세요!'}
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
                backgroundColor: '#676767',
              }}></View>
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
                    backgroundColor: '#676767',
                  }}></View>
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
                <Text
                  style={[NotoSans.Bold, NotoSans.f_16, { color: '#f85757' }]}>
                  {hangangnowData.dust.badderDustGrade}
                </Text>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_14,
                    { color: colors.typo.black },
                  ]}>
                  {`${hangangnowData.dust.dust10Grade} / ${hangangnowData.dust.dust25Grade}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
      <WebView
        ref={webViewRef}
        javaScriptEnabled
        style={{ flex: 1 }}
        source={{
          uri: WEB_VIEW_ORIGIN,
        }}
      />
      <TouchableOpacity
        onPress={onCurrentPosPressed}
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          position: 'absolute',
          right: 20,
          bottom: 30,
          backgroundColor: colors.default.white,
          elevation: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[NotoSans.Medium, NotoSans.f_10, { color: colors.typo.main }]}>
          {'현위치'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSunRizeVisible((prev) => !prev);
        }}
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          position: 'absolute',
          right: 20,
          bottom: 90,
          backgroundColor: colors.default.white,
          elevation: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[NotoSans.Medium, NotoSans.f_10, { color: colors.typo.main }]}>
          {'해돋이'}
        </Text>
      </TouchableOpacity>
      {sunRizeVisible && (
        <TouchableOpacity
          onPress={() => setSunRizeVisible(false)}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 12,
            backgroundColor: colors.default.white,
            borderRadius: 8,
            elevation: 3,
            position: 'absolute',
            right: 74,
            bottom: 81,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_10,
              { color: colors.typo.black },
            ]}>
            <Text>{`${hangangnowData?.sunMoonRiseSet.moonRise} 에 노을이 사라져요! 지금 사진을 찍고 
`}</Text>
            <Text style={{ color: colors.typo.main }}>{'한강일기'}</Text>
            <Text>{'에 기록해보는 건 어떠신가요?'}</Text>
          </Text>
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
              borderBottomColor: colors.default.white,
              rotation: 90,
              position: 'absolute',
              right: -12,
              top: 23,
            }}></View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HangangNow;
