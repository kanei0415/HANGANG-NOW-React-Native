import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import { formatDate } from '@libs/factory';
import { DiaryType } from '@typedef/components/Diary/diary.types';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { width } = Dimensions.get('screen');

type Props = {
  selectedDate: Date | null;
  selectedDateDiary: DiaryType | null;
  allTimeDiaryList: DiaryType[];
  visible: boolean;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  onDetailPressed: (date: Date) => void;
  onDateSelectPressed: () => void;
  onDateSelected: (date: Date) => void;
  onDateCanceled: () => void;
  onShowAllPressed: () => void;
  onPhotoSelectPressed: () => void;
  mode: 'add' | 'show';
};

const Diary = ({
  selectedDate,
  selectedDateDiary,
  allTimeDiaryList,
  visible,
  index,
  setIndex,
  onDetailPressed,
  onDateSelectPressed,
  onDateSelected,
  onDateCanceled,
  onShowAllPressed,
  onPhotoSelectPressed,
  mode,
}: Props) => {
  return (
    <>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          backgroundColor: colors.default.white,
        }}>
        <CHeaderContainer title='나의 한강 일기' />
        <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={onDateSelectPressed}>
            {selectedDate ? (
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_16,
                  { color: colors.main.primary },
                ]}>
                {formatDate(selectedDate, 'YYYY년 MM월 dd일') + ' >'}
              </Text>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_16,
                    { color: colors.typo.black },
                  ]}>
                  {'전체기간'}
                </Text>
                <View
                  style={{
                    marginLeft: 12,
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    backgroundColor: colors.main.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={images.components.Diary.triangle} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        {selectedDate ? (
          mode === 'show' ? (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  marginVertical: 16,
                }}>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_17,
                    { color: colors.typo.black },
                  ]}>
                  {'한강공원에서의 즐거운 하루'}
                </Text>
              </View>
              <View
                style={{
                  width: width - 40,
                  height: (width - 40) / 2,
                }}>
                <SwiperFlatList
                  onChangeIndex={({ index }) => setIndex(index)}
                  style={{ flex: 1 }}
                  horizontal
                  data={[
                    'https://biz.chosun.com/resizer/GY_xtxp9X-LHS9a39G5xPAgAjV8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/AVOGQMXFV5CUZIUYDRBD6LQTAQ.jpg',
                    'https://biz.chosun.com/resizer/GY_xtxp9X-LHS9a39G5xPAgAjV8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/AVOGQMXFV5CUZIUYDRBD6LQTAQ.jpg',
                    'https://biz.chosun.com/resizer/GY_xtxp9X-LHS9a39G5xPAgAjV8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/AVOGQMXFV5CUZIUYDRBD6LQTAQ.jpg',
                  ]}
                  renderItem={({ item }) => (
                    <Image
                      style={{
                        width: width - 40,
                        height: (width - 40) / 2,
                        borderRadius: 8,
                      }}
                      source={{ uri: item }}
                    />
                  )}
                />
                <View
                  style={{
                    width: 40,
                    height: 24,
                    opacity: 0.69,
                    borderRadius: 4,
                    backgroundColor: colors.default.black,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 10,
                    bottom: 8,
                  }}>
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_13,
                      { color: colors.default.white },
                    ]}>{`${index + 1}/3`}</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 16,
                  backgroundColor: colors.background.gray.light,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  borderRadius: 8,
                }}>
                <Text
                  style={[
                    NotoSans.Medium,
                    NotoSans.f_13,
                    { color: colors.typo.black },
                  ]}>{`늘 즐겨 찾곤 하는 한강공원에 오늘도 방문했다!
퇴근하고 잠시 들렀더니, 항상 해가 떠있을 때 봤던 풍경이
색다르게 느껴져서 새로웠던 하루 ㅎㅎ`}</Text>
              </View>
              <View
                style={{
                  marginTop: 24,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_15,
                      { color: colors.main.primary },
                    ]}>
                    {'오늘의 날씨'}
                  </Text>
                  <View
                    style={{
                      marginTop: 16,
                      width: 68,
                      height: 68,
                      borderRadius: 4,
                      backgroundColor: colors.background.gray.light,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}></View>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={[
                      NotoSans.Bold,
                      NotoSans.f_15,
                      { color: colors.main.primary },
                    ]}>
                    {'오늘의 기분'}
                  </Text>
                  <View
                    style={{
                      marginTop: 16,
                      width: 68,
                      height: 68,
                      borderRadius: 4,
                      backgroundColor: colors.background.gray.light,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}></View>
                </View>
              </View>
              <TouchableOpacity
                onPress={onShowAllPressed}
                style={{
                  marginTop: 40,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={[
                    NotoSans.Bold,
                    NotoSans.f_13,
                    {
                      width: 90,
                      height: 28,
                      borderRadius: 14,
                      backgroundColor: colors.main.secondary,
                      color: colors.main.primary,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                    },
                  ]}>
                  {'일기 모아보기'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flex: 1 }}></View>
          )
        ) : (
          <View style={{ paddingHorizontal: 20 }}>
            {allTimeDiaryList.map((item, index) => (
              <View
                key={index}
                style={{
                  padding: 12,
                  borderRadius: 4,
                  backgroundColor: colors.background.gray.light,
                  marginTop: 20,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 4,
                      backgroundColor: colors.main.primary,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        NotoSans.Bold,
                        NotoSans.f_18,
                        { color: colors.default.white },
                      ]}>
                      {new Date().getDate() + ''}
                    </Text>
                  </View>
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_16,
                        { color: colors.main.primary },
                      ]}>
                      {formatDate(new Date(), 'YYYY년 MM월')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginVertical: 12,
                  }}>
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_15,
                      { color: colors.typo.black },
                    ]}>
                    {'한강공원에서의 즐거운 하루'}
                  </Text>
                  <TouchableOpacity onPress={() => onDetailPressed(new Date())}>
                    <Text style={[NotoSans.Regular, NotoSans.f_14]}>
                      {'자세히'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: width - 64,
                    height: (width - 64) / 2,
                    borderRadius: 8,
                    backgroundColor: '#676767',
                  }}></View>
              </View>
            ))}
          </View>
        )}
        <View style={{ height: 80 }} />
      </KeyboardAwareScrollView>
      <DateTimePicker
        isVisible={visible}
        date={selectedDate || new Date()}
        onConfirm={onDateSelected}
        onCancel={onDateCanceled}
      />
    </>
  );
};

export default Diary;
