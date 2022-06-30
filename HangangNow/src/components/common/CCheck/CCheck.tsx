import colors from '@assets/colors';
import NotoSans from '@assets/font';
import images from '@assets/images';
import React from 'react';
import { Image, Text, View } from 'react-native';

type Props = {
  checked?: boolean;
  label?: string;
};

const CCheck = ({ checked = false, label = '' }: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={images.components.common[checked ? 'check' : 'unChecked']}
      />
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.f_14,
          { color: colors.typo.gray.middle, marginLeft: 8 },
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default CCheck;
