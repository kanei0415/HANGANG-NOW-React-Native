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
  setLoginId: React.Dispatch<React.SetStateAction<string | null>>;
  loginIdInputError: InputResultTypes | null;
  loginIdInputSuccess: InputResultTypes | null;
  onLoginIdDuplicateCheckPressed: () => void;
  onNextBtnPressed: () => void;
  loginIdValid: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string | null>>;
  passwordInputError: InputResultTypes | null;
  passwordInputSuccess: InputResultTypes | null;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string | null>>;
  passwordConfirmInputError: InputResultTypes | null;
  passwordConfirmInputSuccess: InputResultTypes | null;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  emailInputError: InputResultTypes | null;
  emailInputSuccess: InputResultTypes | null;
  emailInputDisabled: InputResultTypes | null;
  emailValid: boolean;
  codeCheckBtnAvailable: boolean;
  nextBtnAvailable: boolean;
  onEmailCheckPressed: () => void;
  codeSendAvailable: boolean;
  setCode: React.Dispatch<React.SetStateAction<string | null>>;
  codeInputError: InputResultTypes | null;
  codeInputSuccess: InputResultTypes | null;
  onCodeCheckPressed: () => void;
  emailCodeCheckDone: boolean;
};

const SignupStep2 = ({
  onNextBtnPressed,
  setLoginId,
  loginIdInputError,
  loginIdInputSuccess,
  loginIdValid,
  onLoginIdDuplicateCheckPressed,
  setPassword,
  passwordInputError,
  passwordInputSuccess,
  setPasswordConfirm,
  passwordConfirmInputError,
  passwordConfirmInputSuccess,
  setEmail,
  emailInputError,
  emailInputSuccess,
  emailInputDisabled,
  emailValid,
  codeCheckBtnAvailable,
  nextBtnAvailable,
  onEmailCheckPressed,
  codeSendAvailable,
  setCode,
  codeInputError,
  codeInputSuccess,
  onCodeCheckPressed,
  emailCodeCheckDone,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ paddingBottom: 80 }}
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
            onChange={setLoginId}
            error={loginIdInputError}
            success={loginIdInputSuccess}
            placeHolder='영소문자 및 숫자 5 ~ 20자리'
            containerStyle={{ flex: 1 }}
          />
          <View style={{ width: 80, marginLeft: 12 }}>
            <CButton
              onPressed={onLoginIdDuplicateCheckPressed}
              label='중복 확인'
              disabled={!loginIdValid}
            />
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
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
          onChange={setPassword}
          error={passwordInputError}
          success={passwordInputSuccess}
          placeHolder='예: abcd1234'
          inputType='password'
          containerStyle={{ marginTop: 12 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
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
          onChange={setPasswordConfirm}
          error={passwordConfirmInputError}
          success={passwordConfirmInputSuccess}
          placeHolder='예: abcd1234'
          inputType='password'
          containerStyle={{ marginTop: 12 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
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
          {!emailCodeCheckDone && (
            <View style={{ width: 80, marginLeft: 12 }}>
              <CButton
                label={emailValid && codeSendAvailable ? '재전송' : '인증 하기'}
                disabled={!emailValid}
                onPressed={onEmailCheckPressed}
              />
            </View>
          )}
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
          label='다음 단계로'
          onPressed={onNextBtnPressed}
          disabled={!nextBtnAvailable}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupStep2;
