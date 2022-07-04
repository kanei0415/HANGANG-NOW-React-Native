import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  onDonePressed: () => void;
};

const FindID = ({ onDonePressed }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='아이디 찾기' />
      <View style={{ marginVertical: 32, paddingHorizontal: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.gray.middle },
          ]}>
          {'* 아이디는 회원가입시 입력한 이메일을 통해 찾을 수 있습니다.'}
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <CInputContainer label='이름' placeHolder='이름을 입력해주세요' />
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black },
          ]}>
          {'이메일'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_11,
            { marginVertical: 12, color: colors.typo.gray.middle },
          ]}>
          {'입력하신 이메일로 아이디가 전송됩니다'}
        </Text>
        <CInputContainer
          placeHolder='예: ABC1234@naver.com'
          keyboardType='email-address'
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
        <CButton label='완료하기' onPressed={onDonePressed} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FindID;
