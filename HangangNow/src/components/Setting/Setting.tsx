import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import CToggleContainer from '@components/common/CToggle/containers/CToggleContainer';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Setting = () => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='설정' />
      <View style={{ padding: 20 }}>
        <View>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>
            {'회원정보 수정'}
          </Text>
        </View>
        <View
          style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <TouchableOpacity
              style={{
                width: 54,
                height: 54,
                borderRadius: 27,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={images.components.MyPage.placeholder} />
              <View
                style={{
                  width: 54,
                  height: 22,
                  backgroundColor: colors.default.black,
                  opacity: 0.4,
                  position: 'absolute',
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    NotoSans.Regular,
                    NotoSans.f_10,
                    { color: colors.default.white },
                  ]}>
                  {'편집'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_16,
                { color: colors.typo.black },
              ]}>
              {'김민지 님'}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'이메일'}
          </Text>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_14,
              { color: colors.typo.gray.middle, marginTop: 12 },
            ]}>
            {'asadasd@sadas.cas'}
          </Text>
          <View
            style={{
              marginTop: 20,
              height: 1,
              backgroundColor: colors.main.gray,
            }}></View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>
            {'비밀번호 변경'}
          </Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'새로운 비밀번호'}
          </Text>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_12,
              { color: colors.typo.gray.middle, marginTop: 4 },
            ]}>
            {'영문 · 숫자를 포함하여 8~15 자로 입력해주세요'}
          </Text>
          <CInputContainer
            containerStyle={{ marginTop: 10 }}
            placeHolder='예: abcd1234'
            onChange={() => {}}
            inputType='password'
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_18,
              { color: colors.typo.black },
            ]}>
            {'비밀번호 재확인'}
          </Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'새로운 비밀번호'}
          </Text>
          <Text
            style={[
              NotoSans.Regular,
              NotoSans.f_12,
              { color: colors.typo.gray.middle, marginTop: 4 },
            ]}>
            {'비밀번호를 다시 한 번 입력해주세요'}
          </Text>
          <View style={{ marginTop: 12, flexDirection: 'row' }}>
            <CInputContainer
              containerStyle={{ flex: 1 }}
              placeHolder='예: abcd1234'
              onChange={() => {}}
              inputType='password'
            />
            <View style={{ width: 70, marginLeft: 12 }}>
              <CButton label='변경하기' />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            height: 1,
            backgroundColor: colors.main.gray,
          }}></View>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_16,
                { color: colors.typo.black },
              ]}>
              {'마케팅 정보 · 메일 수신 동의'}
            </Text>
            <Text
              style={[
                NotoSans.Regular,
                NotoSans.f_12,
                { color: colors.typo.gray.middle, marginTop: 4 },
              ]}>
              {'이벤트 및 혜택에 대한 정보를 받으실 수 있습니다'}
            </Text>
          </View>
          <View>
            <CToggleContainer />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 1,
            backgroundColor: colors.main.gray,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'회원 탈퇴'}
          </Text>
          <Image
            source={images.components.MyPage.rightArrow}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            height: 1,
            backgroundColor: colors.main.gray,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'알림 설정'}
          </Text>
          <CToggleContainer />
        </View>
        <View
          style={{
            marginTop: 20,
            height: 1,
            backgroundColor: colors.main.gray,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'문의'}
          </Text>
          <Text style={[NotoSans.Regular, NotoSans.f_13, { color: '#a4a4a3' }]}>
            {'hangangnow@naver.com'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'버전 정보'}
          </Text>
          <Text style={[NotoSans.Regular, NotoSans.f_13, { color: '#a4a4a3' }]}>
            {'15.4.1'}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 1,
            backgroundColor: colors.main.gray,
          }}></View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'약관 내역'}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 36,
              alignItems: 'center',
              marginTop: 12,
            }}>
            <Text
              style={[
                NotoSans.Regular,
                NotoSans.f_13,
                { color: colors.typo.gray.middle },
              ]}>
              {'서비스 이용약관'}
            </Text>
            <Image
              source={images.components.MyPage.rightArrow}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 36,
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Regular,
                NotoSans.f_13,
                { color: colors.typo.gray.middle },
              ]}>
              {'개인정보 처리방침'}
            </Text>
            <Image
              source={images.components.MyPage.rightArrow}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 36,
              alignItems: 'center',
            }}>
            <Text
              style={[
                NotoSans.Regular,
                NotoSans.f_13,
                { color: colors.typo.gray.middle },
              ]}>
              {'위치 정보 이용약관'}
            </Text>
            <Image
              source={images.components.MyPage.rightArrow}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 1,
            backgroundColor: colors.main.gray,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 36,
            alignItems: 'center',
            marginTop: 12,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.f_16,
              { color: colors.typo.black },
            ]}>
            {'로그아웃'}
          </Text>
          <Image
            source={images.components.MyPage.rightArrow}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
        <View style={{ height: 40 }}></View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Setting;
