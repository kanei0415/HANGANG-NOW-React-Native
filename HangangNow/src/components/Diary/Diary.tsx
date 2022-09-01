import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import { formatDate } from '@libs/factory';
import {
  DiaryType,
  EmotionTypes,
  Weathertypes,
} from '@typedef/components/Diary/diary.types';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Image as ImageType } from 'react-native-image-crop-picker';
import ReactNativeModal from 'react-native-modal';

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
  mode: 'add' | 'show';
  setTitle: React.Dispatch<React.SetStateAction<string | null>>;
  photo: ImageType | null;
  setContent: React.Dispatch<React.SetStateAction<string | null>>;
  onPhotoSelectPressed: () => void;
  weatherVisible: boolean;
  setWeatherVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setWeather: React.Dispatch<React.SetStateAction<Weathertypes | null>>;
  weather: Weathertypes | null;
  emotionVisible: boolean;
  setEmotionVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setEmotion: React.Dispatch<React.SetStateAction<EmotionTypes | null>>;
  emotion: EmotionTypes | null;
  addBtnActive: boolean;
  onAddBtnPressed: () => void;
  onItemPressed: (date: Date) => void;
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
  setTitle,
  photo,
  setContent,
  onPhotoSelectPressed,
  weatherVisible,
  setWeather,
  setWeatherVisible,
  weather,
  emotionVisible,
  setEmotion,
  setEmotionVisible,
  emotion,
  addBtnActive,
  onAddBtnPressed,
  mode,
  onItemPressed,
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
                  {selectedDateDiary?.title}
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
                  data={[selectedDateDiary?.url]}
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
                  ]}>
                  {selectedDateDiary?.content}
                </Text>
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
                    }}>
                    {selectedDateDiary?.diaryWeather === 'SUN' && (
                      <Image source={images.components.Diary.weather1} />
                    )}
                    {selectedDateDiary?.diaryWeather === 'SUN_CLOUD' && (
                      <Image source={images.components.Diary.weather2} />
                    )}
                    {selectedDateDiary?.diaryWeather === 'CLOUD' && (
                      <Image source={images.components.Diary.weather3} />
                    )}
                    {selectedDateDiary?.diaryWeather === 'CLOUD_RAIN' && (
                      <Image source={images.components.Diary.weather4} />
                    )}
                    {selectedDateDiary?.diaryWeather === 'CLOUD_SNOW' && (
                      <Image source={images.components.Diary.weather5} />
                    )}
                  </View>
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
                    }}>
                    {selectedDateDiary?.emotion === 'PEACEFUL' && (
                      <Image source={images.components.Diary.emotion1} />
                    )}
                    {selectedDateDiary?.emotion === 'FUNNY' && (
                      <Image source={images.components.Diary.emotion2} />
                    )}
                    {selectedDateDiary?.emotion === 'BIG_SMILE' && (
                      <Image source={images.components.Diary.emotion3} />
                    )}
                    {selectedDateDiary?.emotion === 'SMILE' && (
                      <Image source={images.components.Diary.emotion4} />
                    )}
                    {selectedDateDiary?.emotion === 'SAD' && (
                      <Image source={images.components.Diary.emotion5} />
                    )}
                    {selectedDateDiary?.emotion === 'FROWNING' && (
                      <Image source={images.components.Diary.emotion6} />
                    )}
                  </View>
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
            <View style={{ flex: 1, padding: 20 }}>
              <CInputContainer
                onChange={setTitle}
                placeHolder='일기 제목을 입력해주세요'
              />
              <TouchableOpacity
                onPress={onPhotoSelectPressed}
                style={{
                  width: width - 40,
                  height: ((width - 40) / 32) * 14,
                  backgroundColor: '#dbdbdb',
                  borderRadius: 4,
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {photo ? (
                  <Image
                    style={{
                      width: width - 40,
                      height: ((width - 40) / 32) * 14,
                    }}
                    source={{ uri: photo.path }}
                  />
                ) : (
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_14,
                      { color: colors.typo.gray.middle },
                    ]}>{`갤러리에서 
이미지 첨부`}</Text>
                )}
              </TouchableOpacity>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_10,
                  { color: colors.typo.gray.middle, marginTop: 12 },
                ]}>{`이미지 첨부는 필수가 아닙니다`}</Text>
              <CInputContainer
                onChange={setContent}
                placeHolder='일기 내용을 입력해주세요'
                containerStyle={{ marginTop: 24 }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 24,
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setWeatherVisible(true);
                  }}
                  style={{ alignItems: 'center' }}>
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_15,
                      { color: colors.typo.main },
                    ]}>
                    {'오늘의 날씨'}
                  </Text>
                  <View
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: '#a4a4a3',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 12,
                    }}>
                    {weather === null && (
                      <Image source={images.components.Diary.add} />
                    )}
                    {weather === 'SUN' && (
                      <Image source={images.components.Diary.weather1} />
                    )}
                    {weather === 'SUN_CLOUD' && (
                      <Image source={images.components.Diary.weather2} />
                    )}
                    {weather === 'CLOUD' && (
                      <Image source={images.components.Diary.weather3} />
                    )}
                    {weather === 'CLOUD_RAIN' && (
                      <Image source={images.components.Diary.weather4} />
                    )}
                    {weather === 'CLOUD_SNOW' && (
                      <Image source={images.components.Diary.weather5} />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setEmotionVisible(true);
                  }}
                  style={{ alignItems: 'center' }}>
                  <Text
                    style={[
                      NotoSans.Medium,
                      NotoSans.f_15,
                      { color: colors.typo.main },
                    ]}>
                    {'오늘의 기분'}
                  </Text>
                  <View
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: '#a4a4a3',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 12,
                    }}>
                    {emotion === null && (
                      <Image source={images.components.Diary.add} />
                    )}
                    {emotion === 'PEACEFUL' && (
                      <Image source={images.components.Diary.emotion1} />
                    )}
                    {emotion === 'FUNNY' && (
                      <Image source={images.components.Diary.emotion2} />
                    )}
                    {emotion === 'BIG_SMILE' && (
                      <Image source={images.components.Diary.emotion3} />
                    )}
                    {emotion === 'SMILE' && (
                      <Image source={images.components.Diary.emotion4} />
                    )}
                    {emotion === 'SAD' && (
                      <Image source={images.components.Diary.emotion5} />
                    )}
                    {emotion === 'FROWNING' && (
                      <Image source={images.components.Diary.emotion6} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 40 }}>
                <CButton
                  disabled={!addBtnActive}
                  onPressed={onAddBtnPressed}
                  label='일기 저장'
                />
              </View>
            </View>
          )
        ) : (
          <View style={{ paddingHorizontal: 20 }}>
            {allTimeDiaryList.map((item, index) => (
              <TouchableOpacity
                onPress={() => onItemPressed(new Date(item.diaryDate))}
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
                      {item.diaryDate.split('-').pop()}
                    </Text>
                  </View>
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_16,
                        { color: colors.main.primary },
                      ]}>
                      {`${item.diaryDate.split('-')[0]}년 ${
                        item.diaryDate.split('-')[1]
                      }월`}
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
                    {item.title}
                  </Text>
                  <TouchableOpacity onPress={() => onDetailPressed(new Date())}>
                    <Text style={[NotoSans.Regular, NotoSans.f_14]}>
                      {'자세히'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: width - 64,
                    height: (width - 64) / 2,
                    borderRadius: 8,
                    backgroundColor: '#676767',
                  }}
                />
              </TouchableOpacity>
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
      <ReactNativeModal
        onBackdropPress={() => setWeatherVisible(false)}
        isVisible={weatherVisible}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 40,
            padding: 20,
            borderRadius: 4,
            backgroundColor: colors.default.white,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black },
            ]}>
            {'오늘의 날씨는?'}
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setWeather('SUN');
                setWeatherVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.weather1} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'맑음'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setWeather('SUN_CLOUD');
                setWeatherVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.weather2} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'조금 흐림'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setWeather('CLOUD');
                setWeatherVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.weather3} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'흐림'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 12,
            }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setWeather('CLOUD_RAIN');
                setWeatherVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.weather4} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'비'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setWeather('CLOUD_SNOW');
                setWeatherVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.weather5} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'눈'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity disabled>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
      <ReactNativeModal
        onBackdropPress={() => setEmotionVisible(false)}
        isVisible={emotionVisible}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 40,
            padding: 20,
            borderRadius: 4,
            backgroundColor: colors.default.white,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_17,
              { color: colors.typo.black },
            ]}>
            {'오늘의 날씨는?'}
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setEmotion('PEACEFUL');
                setEmotionVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.emotion1} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'평온'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setEmotion('FUNNY');
                setEmotionVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.emotion2} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'즐거움'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setEmotion('BIG_SMILE');
                setEmotionVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.emotion3} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'행복'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 12,
            }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setEmotion('SMILE');
                setEmotionVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.emotion4} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'그럭저럭'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setEmotion('SAD');
                setEmotionVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.emotion5} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'슬픔'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                setEmotion('FROWNING');
                setEmotionVisible(false);
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={images.components.Diary.emotion5} />
              </View>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_15,
                  { color: colors.typo.black, marginTop: 12 },
                ]}>
                {'당황'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Diary;
