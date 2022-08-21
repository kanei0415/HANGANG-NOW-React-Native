import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Image } from 'react-native';

const { width } = Dimensions.get('screen');

type Props = {
  name: string;
  onDonePressed: () => void;
};

const SignupDone = ({ name, onDonePressed }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='회원가입' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={images.components.Signup.done} />

          <Text style={[NotoSans.Bold, NotoSans.f_20, { marginTop: 24 }]}>
            <Text style={{ color: colors.typo.black }}>{'환영합니다, '}</Text>
            <Text style={{ color: colors.main.primary }}>{name}</Text>
            <Text style={{ color: colors.typo.black }}>{' 님!'}</Text>
          </Text>
        </View>
        <Text style={[NotoSans.Medium, NotoSans.f_13, { marginTop: 24 }]}>
          <Text style={{ color: colors.typo.black }}>{'지금바로 '}</Text>
          <Text style={{ color: colors.main.primary }}>{'한강나우의'}</Text>
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black },
          ]}>
          {'다양한 서비스를 만나보세요!'}
        </Text>
        <View style={{ width: width - 40, marginTop: 80 }}>
          <CButton label='가입완료' onPressed={onDonePressed} />
        </View>
      </View>
    </View>
  );
};

export default SignupDone;
