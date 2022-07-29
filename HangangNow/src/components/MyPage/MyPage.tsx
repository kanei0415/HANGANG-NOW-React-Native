import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { formatDate } from '@libs/factory';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  date: Date;
  calendarList: Date[][];
  onSettingPressed: () => void;
  onPrevMonthPressed: () => void;
  onNextMonthPressed: () => void;
  onDateItemPressed: (d: Date) => void;
};

const MyPage = ({
  date,
  calendarList,
  onSettingPressed,
  onPrevMonthPressed,
  onNextMonthPressed,
  onDateItemPressed,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='마이페이지' showBackPress={false} />
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={images.components.MyPage.placeholder} />
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              marginLeft: 12,
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_18,
                { color: colors.typo.black },
              ]}>
              {'헛! 둘! 헛! 둘! 활동가 유형'}
            </Text>
            <Text style={[NotoSans.Medium, NotoSans.f_18]}>
              <Text style={{ color: colors.main.primary }}>{'김민지'}</Text>
              <Text style={{ color: colors.typo.black }}>{' 님'}</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={onSettingPressed}>
            <Image source={images.components.MyPage.setting} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.main.gray,
            marginTop: 20,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={onPrevMonthPressed}>
            <Image source={images.components.MyPage.prev} />
          </TouchableOpacity>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black, marginHorizontal: 20 },
            ]}>
            {formatDate(date, 'YYYY년 MM월')}
          </Text>
          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={onNextMonthPressed}>
            <Image source={images.components.MyPage.next} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 4,
            backgroundColor: '#f1f1f1',
            padding: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                { color: colors.typo.red, flex: 1, textAlign: 'center' },
              ]}>
              {'일'}
            </Text>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                {
                  color: colors.typo.gray.middle,
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              {'월'}
            </Text>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                {
                  color: colors.typo.gray.middle,
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              {'화'}
            </Text>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                {
                  color: colors.typo.gray.middle,
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              {'수'}
            </Text>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                {
                  color: colors.typo.gray.middle,
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              {'목'}
            </Text>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                {
                  color: colors.typo.gray.middle,
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              {'금'}
            </Text>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_13,
                { color: colors.typo.gray.light, flex: 1, textAlign: 'center' },
              ]}>
              {'토'}
            </Text>
          </View>
          {calendarList.map((w, wi) => (
            <View
              key={wi}
              style={{
                height: 40,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {w.map((d) => (
                <TouchableOpacity
                  key={d.getTime()}
                  disabled={date.getMonth() !== d.getMonth()}
                  onPress={() => onDateItemPressed(d)}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_15,
                      { color: colors.typo.black },
                    ]}>
                    {date.getMonth() === d.getMonth() ? d.getDate() + '' : ''}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MyPage;
