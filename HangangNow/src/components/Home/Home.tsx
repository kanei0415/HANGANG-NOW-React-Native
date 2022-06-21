import colors from '@assets/colors';
import React from 'react';
import { View } from 'react-native';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';

type Props = {};

const Home = ({}: Props) => {
  return (
    <View style={{ backgroundColor: colors.default.black, flex: 1 }}>
      <View style={{ marginTop: 40 }}>
        {/*<CButton active={true} icon={images.common.kakaoTextLogo} />*/}
        <CInputContainer onInputChange={() => {}} />
        {/*<CDateInputContainer onDateChanged={() => {}} />*/}
        {/*<CSearchInputContainer />*/}
      </View>
    </View>
  );
};

export default Home;
