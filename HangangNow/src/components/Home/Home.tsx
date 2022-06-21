import colors from '@assets/colors';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Font from '@assets/font';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';

type Props = {};

const Home = ({}: Props) => {
  const [text, setText] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [textValid, setTextValid] = useState<boolean>(false);

  // const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}>
      <View style={{ marginTop: 120 }}>
        {/*<CButtonContainer backgroundColor={colors.brand.main} />*/}
        {/*<CButtonContainer*/}
        {/*  backgroundColor={colors.default.white}*/}
        {/*  borderWidth={2}*/}
        {/*/>*/}
        <CInputContainer
          onInputChange={(newVal) => {
            setText(newVal);
            const newTextValid = text.length > 0;
            setTextValid(newTextValid);
            setErrorText(newTextValid ? '' : '1자 이상 입력해야 합니다.');
          }}
          isCheckValid={textValid}
          valid={true}
          errorText={errorText}
        />
      </View>
      <View style={{ marginTop: 120 }}>
        {/*<CInputContainer*/}
        {/*  onInputChange={() => {}}*/}
        {/*  type={'password'}*/}
        {/*  isCheckValid={true}*/}
        {/*/>*/}
        {/*<CInputContainer*/}
        {/*  onInputChange={() => {}}*/}
        {/*  type={'password'}*/}
        {/*  isCheckValid={true}*/}
        {/*  onCheckValid={(input) => input.length > 0}*/}
        {/*/>*/}
        {/*<CDateInputContainer mode={'date'} onDateChanged={() => {}} />*/}
        {/*<CSearchInputContainer />*/}
        {/*<LoginInputContainer*/}
        {/*  onInputChange={() => {}}*/}
        {/*  label={'아이디 (이메일 계정)'}*/}
        {/*/>*/}
        {/*<CCheckContainer*/}
        {/*  iconPosition={'right'}*/}
        {/*  iconType={'square'}*/}
        {/*  checked={checked}*/}
        {/*  onPressed={() => setChecked(!checked)}*/}
        {/*/>*/}
        {/*<CCheckContainer*/}
        {/*  iconPosition={'right'}*/}
        {/*  iconType={'round'}*/}
        {/*  checked={checked}*/}
        {/*  onPressed={() => setChecked(!checked)}*/}
        {/*/>*/}
        {/*<CCheckContainer*/}
        {/*  iconPosition={'left'}*/}
        {/*  iconType={'square'}*/}
        {/*  checked={checked}*/}
        {/*  onPressed={() => setChecked(!checked)}*/}
        {/*/>*/}
        {/*<CCheckContainer*/}
        {/*  iconPosition={'left'}*/}
        {/*  iconType={'round'}*/}
        {/*  checked={checked}*/}
        {/*  onPressed={() => setChecked(!checked)}*/}
        {/*/>*/}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 32,
        }}>
        <TouchableOpacity>
          <Text
            style={[
              Font.Regular,
              Font.Size[14],
              {
                color: colors.font.middle,
              },
            ]}>
            {'아이디 찾기'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
