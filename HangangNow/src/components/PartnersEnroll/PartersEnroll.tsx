import colors from '@assets/colors';
import NotoSans from '@assets/font';
import CHeaderContainer from '@components/common/CHeader/containers/CHeaderContainer';
import React from 'react';
import { Text, View } from 'react-native';

const PartnersEnroll = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.default.white }}>
      <CHeaderContainer title='업체정보 등록 · 수정' />
      <View style={{ padding: 20 }}>
        <Text
          style={[
            NotoSans.Medium,
            NotoSans.f_18,
            { color: colors.typo.black },
          ]}>{`종이 전단지를 한 손에서 보고
수수료 없이 전화 주문하세요!`}</Text>
      </View>
    </View>
  );
};

export default PartnersEnroll;
