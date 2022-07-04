import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  onNextBtnPressed: () => void;
};

const SignupStep2 = ({ onNextBtnPressed }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='회원가입' />
      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            {
              color: colors.typo.black,
            },
          ]}>
          {'아이디'}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <CInputContainer
            placeHolder='예: ABC1234'
            containerStyle={{ flex: 1 }}
          />
          <View style={{ width: 80, marginLeft: 12 }}>
            <CButton label='중복 확인' />
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            {
              color: colors.typo.black,
            },
          ]}>
          {'비밀번호'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_11,
            { color: colors.typo.gray.middle, marginTop: 4 },
          ]}>
          {'영문 · 숫자를 포함하여 8~15 자로 입력해주세요'}
        </Text>
        <CInputContainer
          placeHolder='예: abcd1234'
          inputType='password'
          containerStyle={{ marginTop: 12 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            {
              color: colors.typo.black,
            },
          ]}>
          {'비밀번호 재확인'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_11,
            { color: colors.typo.gray.middle, marginTop: 4 },
          ]}>
          {'비밀번호를 다시 한 번 입력해주세요'}
        </Text>
        <CInputContainer
          placeHolder='예: abcd1234'
          inputType='password'
          containerStyle={{ marginTop: 12 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            {
              color: colors.typo.black,
            },
          ]}>
          {'이메일'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_11,
            { color: colors.typo.gray.middle, marginTop: 4 },
          ]}>
          {
            '아이디 · 비밀번호 찾기에 이용되오니 가입 시 이메일을 정확히 입력해주세요'
          }
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <CInputContainer
            placeHolder='예: ABC1234@naver.com'
            containerStyle={{ flex: 1 }}
          />
          <View style={{ width: 80, marginLeft: 12 }}>
            <CButton label='중복 확인' />
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
        <CButton label='다음 단계로' onPressed={onNextBtnPressed} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupStep2;
