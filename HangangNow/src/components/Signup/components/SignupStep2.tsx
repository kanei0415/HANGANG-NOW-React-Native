import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupStep2 = () => {
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
    </KeyboardAwareScrollView>
  );
};

export default SignupStep2;
