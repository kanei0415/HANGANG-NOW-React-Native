import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CButton from '@components/common/CButton/CButton';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  setPassword: React.Dispatch<React.SetStateAction<string | null>>;
  passwordInputError: InputResultTypes | null;
  passwordInputSuccess: InputResultTypes | null;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string | null>>;
  passwordConfirmInputError: InputResultTypes | null;
  passwordConfirmInputSuccess: InputResultTypes | null;
  doneBtnActive: boolean;
  onDonePressed: () => void;
};

const FindPWDone = ({
  setPassword,
  passwordInputError,
  passwordInputSuccess,
  setPasswordConfirm,
  passwordConfirmInputError,
  passwordConfirmInputSuccess,
  doneBtnActive,
  onDonePressed,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='비밀번호 재설정' />
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_20,
            { color: colors.typo.black },
          ]}>
          {'신규 비밀번호를 설정해주세요'}
        </Text>
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black },
          ]}>
          {'새로운 비밀번호'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_11,
            { marginVertical: 12, color: colors.typo.gray.middle },
          ]}>
          {'영문 · 숫자를 포함하여 8~15 자로 입력해주세요'}
        </Text>
        <CInputContainer
          onChange={setPassword}
          error={passwordInputError}
          success={passwordInputSuccess}
          placeHolder='예: abcd1234'
          inputType='password'
          containerStyle={{ marginTop: 12 }}
        />
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.black },
          ]}>
          {'비밀번호 재확인'}
        </Text>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_11,
            { marginVertical: 12, color: colors.typo.gray.middle },
          ]}>
          {'비밀번호를 다시 한 번 입력해주세요'}
        </Text>
        <CInputContainer
          onChange={setPasswordConfirm}
          error={passwordConfirmInputError}
          success={passwordConfirmInputSuccess}
          placeHolder='예: abcd1234'
          inputType='password'
          containerStyle={{ marginTop: 12 }}
        />
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <CButton
          onPressed={onDonePressed}
          label='비밀번호 재설정 완료'
          disabled={!doneBtnActive}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FindPWDone;
