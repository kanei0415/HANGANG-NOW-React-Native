import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { formatDate } from '@libs/factory';
import { ProfileTypes } from '@typedef/components/common/common.types';
import { MBTI_LABEL_TABLE } from '@typedef/components/Mbti/mbti.types';
import { MemoTypes } from '@typedef/components/MyPage/mypage.types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  memoList: MemoTypes[];
  date: Date;
  calendarList: Date[][];
  onSettingPressed: () => void;
  onPrevMonthPressed: () => void;
  onNextMonthPressed: () => void;
  onDateItemPressed: (d: Date) => void;
  profile: ProfileTypes;
  onDiaryPressed: () => void;
  onMbtiPressed: () => void;
  onScrapPressed: () => void;
};

const MyPage = ({
  memoList,
  date,
  calendarList,
  onSettingPressed,
  onPrevMonthPressed,
  onNextMonthPressed,
  onDateItemPressed,
  profile,
  onDiaryPressed,
  onMbtiPressed,
  onScrapPressed,
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
          <Image
            style={{ width: 56, height: 56, borderRadius: 56 }}
            source={
              profile.photoUrl
                ? { uri: profile.photoUrl }
                : images.components.MyPage.placeholder
            }
          />
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
              {profile.memberMBTI
                ? MBTI_LABEL_TABLE[profile.memberMBTI]
                : '검사를 통해 유형을 알아보세요'}
            </Text>
            <Text style={[NotoSans.Medium, NotoSans.f_18]}>
              <Text style={{ color: colors.main.primary }}>{profile.name}</Text>
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
              {w.map((d) =>
                date.getMonth() === d.getMonth() ? (
                  <TouchableOpacity
                    key={d.getTime()}
                    disabled={date.getMonth() !== d.getMonth()}
                    onPress={() => onDateItemPressed(d)}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: memoList.find(
                          (val) => val.memoDate === formatDate(d, 'YYYY-MM-dd'),
                        )?.color,
                      }}>
                      <Text
                        style={[
                          NotoSans.Medium,
                          NotoSans.f_15,
                          {
                            color: memoList.find(
                              (val) =>
                                val.memoDate === formatDate(d, 'YYYY-MM-dd'),
                            )
                              ? colors.default.white
                              : colors.typo.black,
                          },
                        ]}>
                        {d.getDate()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View key={d.getTime()} style={{ flex: 1 }} />
                ),
              )}
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          marginVertical: 14,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={onMbtiPressed}
          style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 48,
              height: 48,
              backgroundColor: '#dbdbdb',
            }}></View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.main.primary, marginTop: 4 },
            ]}>
            {'한강유형검사'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDiaryPressed}
          style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 48,
              height: 48,
              backgroundColor: '#dbdbdb',
            }}></View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.main.primary, marginTop: 4 },
            ]}>
            {'한강일기'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onScrapPressed}
          style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 48,
              height: 48,
              backgroundColor: '#dbdbdb',
            }}></View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_13,
              { color: colors.main.primary, marginTop: 4 },
            ]}>
            {'스크랩 모아보기'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MyPage;
