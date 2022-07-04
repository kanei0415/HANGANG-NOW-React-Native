import colors from '@assets/colors';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { View } from 'react-native';

const FindIDStep3 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='아이디 찾기' />
    </View>
  );
};

export default FindIDStep3;
