import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import { formatDate } from '@libs/factory';
import { MemoTypes, TabTypes } from '@typedef/components/MyPage/mypage.types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const COLOR_LIST_1 = [
  '#FC5C5C',
  '#FF7974',
  '#FFA32C',
  '#FFDD00',
  '#7AE919',
  '#06B500',
];

const COLOR_LIST_2 = [
  '#0B96F2',
  '#106DC9',
  '#BA2CFF',
  '#FF2CE3',
  '#676767',
  '#111111',
];

type Props = {
  memos: MemoTypes[];
  date: Date;
  tab: TabTypes;
  onMemoAddPressed: () => void;
  setMemoTitle: React.Dispatch<React.SetStateAction<string | null>>;
  color: string | null;
  setColor: React.Dispatch<React.SetStateAction<string | null>>;
  memoAddBtnActive: boolean;
  onMemoAddDonePressed: () => void;
};

const CalendarDateDetail = ({
  memos,
  date,
  tab,
  onMemoAddPressed,
  setMemoTitle,
  color,
  setColor,
  memoAddBtnActive,
  onMemoAddDonePressed,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title={formatDate(date, 'YYYY년 MM월')} />
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>
          {formatDate(date, 'dd일 day요일')}
        </Text>
        {tab === 'add' && (
          <>
            <View style={{ marginTop: 16 }}>
              <CInputContainer
                onChange={setMemoTitle}
                placeHolder='메모 내용을 입력해주세요'
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_14,
                  { color: colors.typo.black },
                ]}>
                {'색상 선택'}
              </Text>
              <View
                style={{
                  borderRadius: 4,
                  backgroundColor: '#f1f1f1',
                  padding: 24,
                  marginTop: 16,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {COLOR_LIST_1.map((c, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        setColor(c);
                      }}>
                      {color === c ? (
                        <View
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            backgroundColor: c,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image source={images.components.MyPage.checked} />
                        </View>
                      ) : (
                        <View
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            backgroundColor: c,
                          }}></View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                  }}>
                  {COLOR_LIST_2.map((c, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        setColor(c);
                      }}>
                      {color === c ? (
                        <View
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            backgroundColor: c,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image source={images.components.MyPage.checked} />
                        </View>
                      ) : (
                        <View
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            backgroundColor: c,
                          }}></View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{}}>
              <CButton
                onPressed={onMemoAddDonePressed}
                label='메모 추가하기'
                disabled={!memoAddBtnActive}
              />
            </View>
          </>
        )}
        {tab === 'show' && (
          <>
            {memos.length !== 0 && (
              <View
                style={{
                  borderRadius: 4,
                  backgroundColor: '#f1f1f1',
                  paddingVertical: 20,
                  paddingHorizontal: 12,
                  marginTop: 16,
                }}>
                {memos.map((m, i) => (
                  <View
                    key={i}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: m.color,
                        borderRadius: 10,
                      }}></View>
                    <Text
                      style={[
                        NotoSans.Medium,
                        NotoSans.f_15,
                        {
                          color: m.color,
                          marginLeft: 12,
                        },
                      ]}>
                      {m.content}
                    </Text>
                  </View>
                ))}
              </View>
            )}
            <TouchableOpacity
              onPress={onMemoAddPressed}
              style={{ alignItems: 'center', marginTop: 24 }}>
              <Image source={images.components.MyPage.add} />
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_14,
                  { color: colors.main.primary, marginTop: 12 },
                ]}>
                {'메모 추가하기'}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CalendarDateDetail;
