import colors from '@assets/colors';
import React from 'react';
import { View } from 'react-native';
import CButton from '@components/common/CButton/CButton';
import images from '@assets/images';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={{ backgroundColor: colors.default.black, flex: 1 }}>
      <View style={{ marginTop: 40 }}>
        <CButton active={true} icon={images.common.kakaoTextLogo} />
      </View>
    </View>
  );
};

export default Home;
