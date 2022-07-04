import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  onFindPasswordPressed: () => void;
  onLoginPressed: () => void;
};

const FindIDStep2 = ({ onFindPasswordPressed, onLoginPressed }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='아이디 찾기' />
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[NotoSans.Medium, NotoSans.f_18, { textAlign: 'center' }]}>
          <Text style={{ color: colors.typo.black }}>
            {'입력하신 이메일로\n'}
          </Text>
          <Text style={{ color: colors.main.primary }}>{'아이디'}</Text>
          <Text style={{ color: colors.typo.black }}>
            {'가 전송되었습니다.'}
          </Text>
        </Text>
      </View>
      <View style={{ marginTop: 100, paddingHorizontal: 20 }}>
        <CButton
          label='비밀번호 찾기'
          type='secondary'
          onPressed={onFindPasswordPressed}
        />
        <View style={{ marginTop: 12 }}>
          <CButton
            label='로그인 화면으로 돌아가기'
            type='secondary'
            onPressed={onLoginPressed}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FindIDStep2;
