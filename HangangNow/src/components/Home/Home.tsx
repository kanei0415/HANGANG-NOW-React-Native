import colors from '@assets/colors';
import React from 'react';
import { View } from 'react-native';
import LoginInputContainer from '@components/Login/LoginInput/containers/LoginInputContainer';

type Props = {};

const Home = ({}: Props) => {
  return (
    <View style={{ backgroundColor: colors.default.white, flex: 1 }}>
      <View style={{ marginTop: 40 }}>
        {/*<CButton active={true} icon={images.common.kakaoTextLogo} />*/}
        {/*<CInputContainer onInputChange={() => {}} />*/}
        {/*<CDateInputContainer onDateChanged={() => {}} />*/}
        {/*<CSearchInputContainer />*/}
        <LoginInputContainer
          onInputChange={() => {}}
          label={'아이디 (이메일 계정)'}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <LoginInputContainer
          onInputChange={() => {}}
          label={'비밀번호'}
          type={'password'}
        />
      </View>
    </View>
  );
};

export default Home;
