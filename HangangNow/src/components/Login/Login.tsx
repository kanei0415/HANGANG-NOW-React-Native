import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CCheck from '@components/common/CCheck/CCheck';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import React from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  onEmailSignupPressed: () => void;
  onKakaoSignupPressed: () => void;
  autoLoginChecked: boolean;
  setAutoLoginChecked: React.Dispatch<React.SetStateAction<boolean>>;
  onFindIDPressed: () => void;
};

const { width, height } = Dimensions.get('window');

const Login = ({
  onEmailSignupPressed,
  onKakaoSignupPressed,
  autoLoginChecked,
  setAutoLoginChecked,
  onFindIDPressed,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.default.white,
          paddingHorizontal: 20,
          height: height,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 24,
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 40,
              backgroundColor: colors.main.secondary,
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_14,
                { color: colors.main.primary },
              ]}>
              {'미리보기'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: height * 0.05 + 15 }}>
          <Image source={images.components.Login.label} />
        </View>
        <View style={{ marginTop: 32 }}>
          <View>
            <CInputContainer placeHolder='아이디를 입력해주세요' />
          </View>
          <View style={{ marginTop: 12 }}>
            <CInputContainer
              placeHolder='비밀번호를 입력해주세요'
              inputType='password'
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CCheck
              checked={autoLoginChecked}
              label='자동 로그인'
              onPressed={() => setAutoLoginChecked(!autoLoginChecked)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CButton disabled={false} label='로그인' />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: height * 0.85 - 120,
            width: width,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={onEmailSignupPressed}
            style={{
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.main.secondary,
              borderRadius: 4,
            }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_15,
                { color: colors.main.primary },
              ]}>
              {'이메일 회원가입'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onKakaoSignupPressed}
            style={{
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#ffe60a',
              marginTop: 16,
              borderRadius: 4,
            }}>
            <Image source={images.components.Login.kakao} />
            <Text
              style={[NotoSans.Medium, NotoSans.f_15, { color: '#381e1e' }]}>
              {'카카오 계정으로 시작하기'}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 24,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={onFindIDPressed}>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_14,
                  { color: colors.typo.gray.middle },
                ]}>
                {'아이디 찾기'}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: 15,
                backgroundColor: colors.typo.gray.middle,
                marginHorizontal: 24,
              }}></View>
            <TouchableOpacity>
              <Text
                style={[
                  NotoSans.Medium,
                  NotoSans.f_14,
                  { color: colors.typo.gray.middle },
                ]}>
                {'비밀번호 찾기'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
