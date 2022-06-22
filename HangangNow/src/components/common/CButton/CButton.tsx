import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '@assets/colors';
import NotoSans from '@assets/font';

type Props = {
  type: 'primary' | 'outline';
  active: boolean;
  label: string;
  onPress: () => void;
};

const CButton = ({ type, active, label, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: active ? colors.brand.main : colors.system.disabled,
        borderWidth: type === 'outline' ? 1 : 0,
        borderColor: colors.background.middle,
      }}
      disabled={!active}
      onPress={onPress}>
      <Text
        style={[
          NotoSans.Medium,
          NotoSans.Size[18],
          {
            color: active ? colors.default.black : colors.font.disabled,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;
