import colors from '@assets/colors';
import NotoSans, { Roboto } from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CDateInputContainer from '@components/common/CInput/containers/CDateInputContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import {
  FEMALE_TYPE,
  GenderTypes,
  MALE_TYPE,
} from '@typedef/components/Signup/signup.types';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {
  gender: GenderTypes | null;
  setGender: React.Dispatch<React.SetStateAction<GenderTypes | null>>;
  onDoneBtnPressed: () => void;
};

const SignupStep3 = ({ gender, setGender, onDoneBtnPressed }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='회원가입' />
      <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
        <CInputContainer label='이름' placeHolder='이름을 입력해주세요' />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black },
          ]}>
          {'성별'}
        </Text>
        <View style={{ marginTop: 12, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => setGender(MALE_TYPE)}
            style={{ flex: 1, marginRight: 8 }}>
            <CButton label='남성' disabled={gender !== MALE_TYPE} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender(FEMALE_TYPE)}
            style={{ flex: 1 }}>
            <CButton label='여성' disabled={gender !== FEMALE_TYPE} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
        <CDateInputContainer
          label='생년월일'
          placeHolder='생년월일을 선택 해주세요'
        />
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <CButton label='완료하기' onPressed={onDoneBtnPressed} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupStep3;
