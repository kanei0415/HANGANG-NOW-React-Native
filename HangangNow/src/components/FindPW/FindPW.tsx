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
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  emailInputError: InputResultTypes | null;
  emailInputSuccess: InputResultTypes | null;
  emailInputDisabled: InputResultTypes | null;
  emailValid: boolean;
  codeCheckBtnAvailable: boolean;
  onEmailCheckPressed: () => void;
  codeSendAvailable: boolean;
  setCode: React.Dispatch<React.SetStateAction<string | null>>;
  codeInputError: InputResultTypes | null;
  codeInputSuccess: InputResultTypes | null;
  onCodeCheckPressed: () => void;
  emailCodeCheckDone: boolean;
  doneBtnActive: boolean;
  onDonePressed: () => void;
};

const FindPW = ({
  setName,
  setEmail,
  emailInputError,
  emailInputSuccess,
  emailInputDisabled,
  emailValid,
  codeCheckBtnAvailable,
  onEmailCheckPressed,
  codeSendAvailable,
  setCode,
  codeInputError,
  codeInputSuccess,
  onCodeCheckPressed,
  emailCodeCheckDone,
  doneBtnActive,
  onDonePressed,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.default.white,
      }}>
      <CHeaderContainer title='비밀번호 찾기' />
      <View style={{ marginVertical: 32, paddingHorizontal: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_13,
            { color: colors.typo.gray.middle },
          ]}>
          {
            '* 회원가입시 입력한 이름과 이메일 주소를 확인하여\n   임시 비밀번호를 전송해드립니다.'
          }
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <CInputContainer
          onChange={setName}
          label='이름'
          placeHolder='이름을 입력해주세요'
        />
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
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
            onChange={setEmail}
            error={emailInputError}
            success={emailInputSuccess}
            disabled={emailInputDisabled}
            keyboardType='email-address'
            placeHolder='예: ABC1234@naver.com'
            containerStyle={{ flex: 1 }}
          />
          <View style={{ width: 80, marginLeft: 12 }}>
            <CButton
              label={emailValid && codeSendAvailable ? '재전송' : '인증 하기'}
              disabled={!emailValid}
              onPressed={onEmailCheckPressed}
            />
          </View>
        </View>
        {!emailCodeCheckDone && (
          <View style={{ flexDirection: 'row', marginTop: 24 }}>
            <CInputContainer
              onChange={setCode}
              error={codeInputError}
              success={codeInputSuccess}
              placeHolder='인증번호를 입력해주세요'
              containerStyle={{ flex: 1 }}
            />
            <View style={{ width: 80, marginLeft: 12 }}>
              <CButton
                label='인증 완료'
                disabled={!codeCheckBtnAvailable}
                onPressed={onCodeCheckPressed}
              />
            </View>
          </View>
        )}
        {!emailCodeCheckDone && (
          <View style={{ marginTop: 4 }}>
            <Text
              style={[
                NotoSans.Medium,
                NotoSans.f_11,
                { color: colors.typo.gray.middle, marginTop: 4 },
              ]}>
              {`메일이 올바르게 전송되지 않았다면 '재전송'을 눌러주세요`}
            </Text>
          </View>
        )}
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
        <CButton
          label='비밀번호 재설정'
          onPressed={onDonePressed}
          disabled={!doneBtnActive}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FindPW;
