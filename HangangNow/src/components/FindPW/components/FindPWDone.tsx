import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  onGoLoginPressed: () => void;
};

const FindPWDone = ({ onGoLoginPressed }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='비밀번호 찾기' />
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black, textAlign: 'center' },
          ]}>
          <Text>{'귀하의 이메일로\n'}</Text>
          <Text style={{ color: colors.main.primary }}>{'임시 비밀번호'}</Text>
          <Text>{'가 전송되었습니다'}</Text>
        </Text>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text
          style={[
            NotoSans.Regular,
            NotoSans.f_14,
            { color: colors.typo.gray.dark },
          ]}>
          {'이메일 확인 후, 임시 비밀번호로 로그인을 진행해주세요'}
        </Text>
      </View>
      <View style={{ marginTop: 80, paddingHorizontal: 20 }}>
        <CButton
          type='secondary'
          label='로그인 화면으로 돌아가기'
          onPressed={onGoLoginPressed}
        />
      </View>
    </View>
  );
};

export default FindPWDone;
